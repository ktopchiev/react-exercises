import { useEffect, useState } from "react"

export default function Calculator() {

    const [firstInput, setFirstInput] = useState<string>('');
    const [secondInput, setSecondInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOperation = (event: any, operation: string) => {
        event.preventDefault();
        const firstInputAsNum = Number(firstInput);
        const secondInputAsNum = Number(secondInput);
        let result = 0;

        switch (operation) {
            case "add":
                result = firstInputAsNum + secondInputAsNum;
                break;
            case "sub":
                result = firstInputAsNum - secondInputAsNum;
                break;
            case "mul":
                result = firstInputAsNum * secondInputAsNum;
                break;
            case "div":
                result = firstInputAsNum / secondInputAsNum;
                break;
            default:
                break;
        }

        setResult(result.toString());
    }

    useEffect(() => {

        setFirstInput('');
        setSecondInput('');
    }, [result])

    return (
        <div className="calculator">
            <h2 style={{ display: 'block' }}>Simple calculator</h2>
            <form>
                <input
                    id="first"
                    type="text"
                    onChange={(e) =>
                        setFirstInput(e.target.value)
                    }
                    value={firstInput ?? ""}
                />
                <input
                    id="second"
                    type="text"
                    readOnly={firstInput == ''}
                    onChange={(e) => {
                        setSecondInput(e.target.value)
                    }}
                    value={secondInput ?? ""}
                />
                <label htmlFor="second" style={{ color: 'black' }}>Result</label>
                <input
                    id="result"
                    type="text"
                    value={result?.toString()}
                    style={{ color: 'black' }}
                    disabled
                />
                <div className="operations">
                    <button onClick={(e) => handleClickOperation(e, "add")}>+</button>
                    <button onClick={(e) => handleClickOperation(e, "sub")}>-</button>
                    <button onClick={(e) => handleClickOperation(e, "mul")}>x</button>
                    <button onClick={(e) => handleClickOperation(e, "div")}>/</button>
                </div>
            </form>
        </div>
    )
}

