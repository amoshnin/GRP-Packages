![Alt text](Assets/image.png?raw=true)

[GitHub](https://github.com/Artem711/react-native-animated-chart) |
[NPM](https://www.npmjs.com/package/react-native-animated-chart)

## Instalation

```javascript
yarn add react-native-animated-chart
```

## Usage

```javascript
import { View, StyleSheet, Dimensions } from "react-native"
import AnimatedChart from react-native-animated-chart

const { width } = Dimensions.get("window")
const startDate = new Date("2019-09-01").getTime()
const numberOfMonths = 7

const ChartComponent = (props) => {
  return (
    <Graph
      data={data}
      startDate={startDate}
      numberOfMonths={numberOfMonths}
      numberOfRanges={4}
      width={width}
      height={197}
    />
  )
}

export default ChartComponent
```

## Documentation (props)

| Props            | Type                                                | Default  |
| ---------------- | --------------------------------------------------- | -------- |
| data             | Array<{date: number; value: number; color: string}> | Required |
| startDate        | number                                              | Required |
| width?           | number                                              | Optional |
| height?          | number                                              | Optional |
| numberOfMonths?  | number                                              | Optional |
| numberOfRanges?  | number                                              | Optional |
| barStyle?        | {topStyle: ViewStyle; bodyStyle: ViewStyle}         | Optional |
| yAxisStyle?      | {wrap: ViewStyle; text: TextStyle}                  | Optional |
| xAxisStyle?      | {wrap: ViewStyle; text: TextStyle}                  | Optional |
| linesConfig?     | {visible: boolean; style: ViewStyle}                | Optional |
| animationConfig? | {type: "Spring" / "Timing"; duration: number}       | Optional |
