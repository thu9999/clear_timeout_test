import * as React from 'react';
import './Modal.scss';

interface ModalProps {}

class Modal extends React.Component<{}, {
    name: string
}> {
    sub: any; // subscription

    constructor(props: ModalProps) {
        super(props);

        this.state = {
            name: 'John',
        }
    }

    componentDidMount() {
        this.sub = setTimeout(() => {
            this.setState({
                name: 'Jack'
            })
        }, 5 * 1000)
    }

    componentWillUnmount() {
        //clearTimeout(this.sub);
    }

    render() {
        const { name } = this.state;

        return (
            <div className="modal">{name}</div>
        )
    }
}

export default Modal;