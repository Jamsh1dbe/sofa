import React, { Component } from 'react'
import { Div } from './style'
export default class index extends Component {
    render() {
        return (
            <div>
                <Div>
                    <Div.Left>
                        <Div.Manu>All</Div.Manu>
                        <Div.Manu>New Arrivals</Div.Manu>
                        <Div.Manu>Hot Sale</Div.Manu>
                        <Div.Manu>Furniture</Div.Manu>
                        <Div.Manu>Amrature</Div.Manu>
                        <Div.Manu>Table</Div.Manu>
                        <Div.Manu>CHair</Div.Manu>
                        <Div.Manu>Sofa</Div.Manu>
                        <Div.Manu>Mirrors</Div.Manu>
                        <Div.Manu>Stools</Div.Manu>
                        <Div.Bottom>Benches</Div.Bottom>
                    </Div.Left>
                    <Div.Right>
                        <Div.First>
                            <Div.P1>TOP COLLECTIONS 2022</Div.P1>
                            <Div.P2>We Server Your
                                Dream Furniture
                            </Div.P2>
                            <Div.P3>Get 50% off all products</Div.P3>
                            <Div.P4>SHOP NOW</Div.P4>
                        </Div.First>
                        <Div.Furniture/>
                        <Div.Third>
                            <Div.Third1>
                                <Div.Big/>
                                <Div.Cost>$120</Div.Cost>
                                <Div.Name>Office Desk Chair</Div.Name>
                            </Div.Third1>
                            <Div.Third2>
                                <Div.Madium/>
                                <Div.Cost>$180</Div.Cost>
                                <Div.Name>Home Alisa Sofa</Div.Name>
                            </Div.Third2>
                            <Div.Third3>
                                <Div.Fat/>
                                <Div.Cost>$250</Div.Cost>
                                <Div.Name>Modern Chair</Div.Name>
                            </Div.Third3>
                        </Div.Third>
                    </Div.Right>
                </Div>
            </div>
        )
    }
}
