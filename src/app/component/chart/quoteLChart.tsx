
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

export default function QuoteLChart({ quote }: { quote: number }) {

    const labels = [quote]
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: '',
                type: 'bar',
                data: [quote],
                backgroundColor: '#60a5fa',
            },
        ],
    };

    const oprions: any = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                min: 0,
                max: 16500,
            },
            y: {
                display: false,
                position: 'right',
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip : false,
            datalabels: {
                color: '#94a3b8' ,
                display: true,
                anchor : 'start',
                align: 'end',
                offset : 50,
                formatter: function(value: number) {
                    return value;
                }
            },
        },
        layout: {
            padding: {
                top: 0,
                bottom: 0,
            }
        },
    }

    return (
        <Bar data={data} options={oprions} className='w-full' ></Bar>
    );
}