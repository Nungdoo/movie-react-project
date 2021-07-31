import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state === undefined) {
            return null;
        } else {
            console.log(location.state);
            return (
                <div>
                    <h1>{location.state.title}</h1>
                    <p>{location.state.summary}</p>
                </div>
            );
        }
    }
}

export default Detail;