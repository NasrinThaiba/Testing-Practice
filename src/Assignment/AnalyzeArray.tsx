type AnalyzeProps = {
    average : number;
    minimum : number;
    maximum : number;
    length : number
}

export default function AnalyzeArray(arr : number[]) : AnalyzeProps {
    if(arr.length === 0) {
        throw new Error("analyzeArray requires a non-empty array of numbers");
    }
    const length = arr.length;
    const average = arr.reduce((sum, value) => sum + value, 0) / length;
    const minimum = Math.min(...arr);
    const maximum = Math.max(...arr);

    return {average, minimum, maximum, length};
}

