import { createContext } from "react";
import { useContext, useState } from "react";
import metricsData from '../metrics.json';
// import Cards from '../cards.json';

export const LayoutContext = createContext()
export const UseLayout = () => {
    const context = useContext(LayoutContext)
    return context
}

export const LayoutProvider = ({ children }) => {

    const handleSetState = async (key, value) => {
        setItems({
            ...items,
            [key]: value,
        })
    }
    const handleMultipleStateChanges = async (arrKeysValues) => {
        arrKeysValues.forEach(element => {
            handleSetState(element.key, element.value)
        });
    }
    const [items, setItems] = useState({
        slideIndex: 1,
        selected: "home",
        open: false,
        colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "rgb(136, 132, 216)"],
        radian: Math.PI / 180,
    })
    let allClients = []
    let clientsInCountries = [{}]
    let beaconData = []

    let info = {
        connections: {},
        disconnections: {},
        time: {},
        averageLatency: {},
        beaconBlocks: {},
        beaconBlocksAverage: {},
        beaconBlocksAggregations: {},
        quantityClients: {},
        quantityClientsPercentage: {},
    }
    let client = ""
    let index = 0
    let scatterData = []
    let totalClients = 0
    metricsData.forEach((item) => {
        scatterData.push({ x: item.connected_time, y: item.total_messages, z: index })
        totalClients += 1
        if (!clientsInCountries[0].hasOwnProperty(item.country.toLowerCase())) {
            clientsInCountries[0][item.country.toLowerCase()] = 1
        } else {
            clientsInCountries[0][item.country.toLowerCase()] += 1
        }
        client = item.client.toLowerCase()
        if (info.connections[client]) {
            info.connections[client] += parseFloat(item.connections)
            info.disconnections[client] += parseFloat(item.disconnections)
            info.time[client] += parseFloat(item.connected_time)
            info.averageLatency[client] += parseFloat(item.latency)
            info.beaconBlocks[client] += parseFloat(item.beacon_blocks)
            info.quantityClients[client] += 1
            info.beaconBlocksAggregations[client] += parseFloat(item.beacon_aggregations)
        } else {
            allClients = item.client
            info.connections[client] = parseFloat(item.connections) || 0
            info.disconnections[client] = parseFloat(item.disconnections) || 0
            info.time[client] = parseFloat(item.connected_time) || 0
            info.averageLatency[client] = parseFloat(item.latency) || 0
            info.beaconBlocks[client] = parseFloat(item.beacon_blocks) || 0
            info.quantityClients[client] = 1
            info.beaconBlocksAggregations[client] = parseFloat(item.beacon_aggregations) || 0
        }
        index++
    })
    let country = ""
    let countryData = []
    for (const property in clientsInCountries[0]) {
        country = property[0].toUpperCase() + property.slice(1, property.length)
        if (countryData.length !== 8) {
            countryData.push({
                name: country,
                uv: clientsInCountries[0][property]
            })
        }
    }
    for (const property in info.beaconBlocks) {
        let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
        beaconData.push({
            name: figure,
            uv: info.beaconBlocks[property],
            scatterData: scatterData
        })
    }
    let aggregations = []
    for (const property in info.beaconBlocksAggregations) {
        let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
        aggregations.push({
            name: figure,
            uv: info.beaconBlocksAggregations[property]
        })
    }
    for (const property in info.averageLatency) {
        info.averageLatency[property] = info.averageLatency[property] / info.quantityClients[property]
    }
    let connections = []
    for (const property in info.connections) {
        let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
        connections.push({
            name: figure,
            uv: info.connections[property] / info.quantityClients[property]
        })
        info.connections[property] = info.connections[property] / info.quantityClients[property]
    }
    let disconnections = []
    for (const property in info.disconnections) {
        let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
        disconnections.push({
            name: figure,
            uv: info.disconnections[property] / info.quantityClients[property]
        })
        info.disconnections[property] = info.disconnections[property] / info.quantityClients[property]
    }
    let areaData = []
    for (const property in info.time) {
        let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
        areaData.push({
            name: figure,
            uv: info.time[property]
        })
        info.time[property] = info.time[property] / info.quantityClients[property]
    }
    let data = []
    for (const property in info.quantityClients) {
        info.quantityClientsPercentage[property] = parseFloat((info.quantityClients[property] * (100 / totalClients)).toFixed(2))
        data.push({ name: property, value: parseFloat((info.quantityClients[property] * (100 / totalClients)).toFixed(2)) })
    }
    let averageMessages = []
    for (const property in info.beaconBlocks) {
        averageMessages.push({
            name: property,
            uv: (info.beaconBlocks[property] / info.quantityClients[property])
        })
        info.beaconBlocksAverage[property] = info.beaconBlocks[property] / info.quantityClients[property]
    }
    let testData = countryData

    const plusSlides = async (quantity) => {
        if (items.slideIndex + quantity > 0 && items.slideIndex + quantity < 3) {
            handleSetState("slideIndex", (items.slideIndex + quantity))
            // this.setState({
            //     slideIndex: (this.state.slideIndex + quantity)
            // })
        }
    }

    const openMenu = async () => {
        if (items.open === true) {
            handleSetState("open", false)
            // this.setState({
            //     open: false
            // })
        } else {
            handleSetState("open", true)
            // this.setState({
            //     open: true
            // })
        }
    }
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, client }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * items.radian);
        const y = cy + radius * Math.sin(-midAngle * items.radian);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <LayoutContext.Provider
            value={{
                items,
                plusSlides,
                openMenu,
                handleSetState,
                handleMultipleStateChanges,
                renderCustomizedLabel,
                averageMessages,
                info,
                countryData,
                testData,
                beaconData,
                scatterData,
                data,
                areaData,
                aggregations,
                connections,
                disconnections
            }}>
            {children}
        </LayoutContext.Provider>
    )
}
