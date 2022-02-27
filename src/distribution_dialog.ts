import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

let oldDialog: Dialog | null = null

export const distribution_dialog = (roll: string, distribution: [number, number][]) => {
  if (oldDialog) {
    oldDialog.close()
  }
  let d = new Dialog({
    title: `${roll} Distribution`,
    content: '<canvas width="400" height="400"></canvas>',
    buttons: {},
    default: "",
    render: html => {
      const canvas = (html as JQuery<HTMLElement>)[0].getElementsByTagName("canvas")[0] as HTMLCanvasElement
      const labels = distribution.map(x => x[0] + "")

      const data = {
        labels: labels,
        datasets: [{
          label: roll,
          backgroundColor: 'rgb(0, 114, 189)',
          borderColor: 'rgb(0, 114, 189)',
          data: distribution.map(x => x[1]),
        }]
      };

      const config = {
        type: 'bar',
        data: data,
        options: {}
      };
      const chart = new Chart(canvas, config as any)
    }
  })
  d.render(true)
  oldDialog = d
  return d
}