import React, { Component } from 'react'
import { Div } from './style'
export default class index extends Component {
    render() {
        return (
            <div>
                <Div>
                    <Div.Box>
                        <Div.P>ALL CALLECTION</Div.P>
                    </Div.Box>
                    <Div.Manu1>HOME</Div.Manu1>
                    <Div.Manu>SHOP</Div.Manu>
                    <Div.Manu>BLOG</Div.Manu>
                    <Div.Manu>ABOUT</Div.Manu>
                    <Div.Manu>CONTACT US</Div.Manu>
                </Div>
            </div>
        )
    }
}
