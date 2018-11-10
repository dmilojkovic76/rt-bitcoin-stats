<script>
import { Line, mixins } from "vue-chartjs";

import { mapState } from "vuex";

export default {
  extends: Line,
  mixins: [mixins.reactiveData],
  computed: {
    ...mapState(["BPI_rate", "BPI_time", "chart_Data", "chart_Labels"]),
  },
  mutations: {
  },
  mounted() {
    this.renderChart({
      labels: this.$store.state.chart_Labels,
      datasets: [{
        data: this.$store.state.chart_Data,
      }],
    });
  },
};
</script>
