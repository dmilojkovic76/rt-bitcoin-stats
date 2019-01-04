<script>
import { Line } from "vue-chartjs";

// import { mapState } from "vuex";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Array,
      default: null,
      required: true,
    },
    chartLabels: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    // ovako sam prvobitno mislio
    izrendajChart() {
      this.renderChart({
        labels: this.$store.state.chart_Labels,
        datasets: [{
          data: this.$store.state.chart_Data,
        }],
      });
    },
  },
  mounted() {
    // ovako sam prvobitno mislio
    // this.izrendajChart();
    // ali sam probao sa chartProps
    this.renderChart({
      labels: this.chartLabels,
      datasets: [
        { data: this.chartData },
      ],
    }, this.options);
  },
};
</script>
