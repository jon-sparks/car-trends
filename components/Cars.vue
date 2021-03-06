<script setup>

  //Data
  const cars = ref([])
  const coldStart = ref(false)
  const loading = ref(false)

  //mounted
  getCars()
  
  //Methods
  const modelColour = (model) => {
    if (model.includes(`Mark`)) {
      return `rgba(0, 93, 255, 0.5)`
    } else if (model.includes(`Cresta`)) {
      return `rgba(245, 40, 145, 0.5)`
    } else if (model.includes(`Chaser`)) {
      return `rgba(13, 255, 0, 0.5)`
    }
    return `rgba(255, 162, 0, 0.5)`
  }

  async function getCars () {
    loading.value = true
    cars.value = await $fetch(`https://car-trends-api.herokuapp.com/api/cars`)
    loading.value = false
  }

  watchEffect(() => {
    if (loading.value === true) {
      setTimeout(() => {
        coldStart.value = true
      }, 3000)
    } else {
      coldStart.value = false
    }
  })

  //Computed
  const mostExpensive = computed(() => {
    return [...cars.value].sort((a, b) => parseInt(b.price) - parseInt(a.price))[0]
  })

  const cheapest = computed(() => {
    return [...cars.value].sort((a, b) => parseInt(a.price) - parseInt(b.price))[0]
  })

  const carsMileagePrice = computed(() => {
    const modelNames = [...new Set(cars.value.map(car => car.model))]
    const models = []
    modelNames.forEach(name => models.push({
      name,
      colour: modelColour(name),
      data: []
    }))
    cars.value.forEach(car => {
      models.find(model => model.name === car.model).data.push([parseInt(car.mileage), parseInt(car.price)])
    })
    return models
  })

  const chartOptions = computed(() => {
    return {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Price vs. Mileage'
      },

      // subtitle: {
      //   text: 'Source: thesolarfoundation.com'
      // },

      yAxis: {
        title: {
          text: 'Price (USD)'
        }
      },

      xAxis: {
        title: {
            enabled: true,
            text: 'Mileage (Km)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x}km<br>${point.y} (USD)'
          }
        }
      },

      series: carsMileagePrice.value,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    }
  }) 
</script>

<template>
  <section class="cars">
    <template v-if="loading">
      <Loader />
      <h2 v-if="coldStart">Please wait. Server is cold starting.</h2>
    </template>
    <template v-else-if="!loading && cars.length">
      <Snippets>
        <Snippet
          title="Highest Price"
          :subtitle="`${mostExpensive.year} ${mostExpensive.model}`"
          :value="`$${mostExpensive.price} USD`"
          :url="mostExpensive.url"
          :info="`Date logged: ${new Date(mostExpensive.date).toLocaleDateString('en-GB')}`"
        />
        <Snippet
          title="Lowest Price"
          :subtitle="`${cheapest.year} ${cheapest.model}`"
          :value="`$${cheapest.price} USD`"
          :url="cheapest.url"
          :info="`Date logged: ${new Date(mostExpensive.date).toLocaleDateString('en-GB')}`"
        />
      </Snippets>
      <Charts>
        <Chart>
          <highchart
            :options="chartOptions"
          />
        </Chart>
      </Charts>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.cars {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 7rem;

  h2 {
    text-align: center;
  }
}
</style>