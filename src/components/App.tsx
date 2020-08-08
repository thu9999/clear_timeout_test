import * as React from 'react';
import './Hello.scss';
import Modal from './modal/Modal';

export interface HelloProps {
}

class App extends React.Component<{}, {
    active: boolean
}> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            active: false
        }
    }

    handleToggle = () => {

        const {
            active
        } = this.state;

        this.setState({
            active: !active
        })
    }

    render() {

        const {
            active
        } = this.state;

        return (
            <>
               <button onClick={this.handleToggle}>Toggle</button>
                {active && <Modal />}
            </>
        )

    }
}

export default App;