import React from 'react';

export default (WrapperView, LinesBarHoc, MainHoc) =>
    class extends React.Component {
        render() {
            return <WrapperView className="cols">
                <LinesBarHoc />
                <MainHoc {...this.props}/>
            </WrapperView>
        }
    }