import React, { Fragment, useState, useEffect, useRef } from 'react';

export const User = ({ userName, age, pet }) => (
    <h1>{userName}{age}: Tier: {pet}</h1>
);

function Hi(props) {
    const [counter, setCounter] = useState(0);
    const [hi, setHi] = useState('Hi');

    const btn = useRef(null);

    useEffect(() => {
        const hello = () => {
            setHi('Hello')
            btn.current.style = 'border-color: red;';
        };
        window.setTimeout(hello, 1000);
        return () => window.clearTimeout(hello);
    }, []);

    const user = {
        userName: 'Hans',
        age: 20,
        pet: 'dog',
    };

    const { pet, ...userProps } = user;

    return (
        <button ref={btn} onClick={() => setCounter(counter + 1)}>
            {hi}
            {' '}
            <User {...userProps} />
            {counter}
        </button>
    );
};

function A(props) {
    if (props.counter === 0) {
        return null;
    }

    return (
        <div>Rekursives Hallo <A counter={props.counter - 1}/></div>
    )
};

const withBorder = (Component) => (props) => {
    return (
        <div style={{ border: 'solid 3px red' }}>
            <Component {...props} />
        </div>
    );
};

const withShadow = (Component) => (props) => {
    return (
        <div style={{ boxShadow: '10px 10px 10px black' }}>
            <Component {...props} />
        </div>
    );
};

const AWithBorder = withShadow(withBorder(A));
const isActive = true;
const A4 = isActive && <A counter={4} />;

const lala = window.irgendwas || 'Katze';

export function FirstStep (props){
    return (
        <Fragment>
            <Hi />
            <A counter={4} />
            <AWithBorder counter={2} />
            {A4 }
            {lala }
            {' '}
            {['Hund']}
        </Fragment>
    )
};
