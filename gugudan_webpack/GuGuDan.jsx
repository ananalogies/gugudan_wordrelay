const React = require('react');

const GuGuDan = () => {
    const [random1, setRandom1] = React.useState(Math.ceil(Math.random() * 9));
    const [random2, setRandom2] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const refInput = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const answer = random1 * random2;
        if (parseInt(value, 10) === answer) {
            setResult(`정답입니다. ${answer}`);
            setRandom1(Math.ceil(Math.random() * 9));
            setRandom2(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('오답입니다.');
            setValue('');
        }
        refInput.current.focus();
    }

    return (
        <React.Fragment>
            <div>{random1} 곱하기 {random2}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={refInput} type="number" value={value} onChange={onChangeInput} />
                <button type="submit">입력하기</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
    );
}

module.exports = GuGuDan;