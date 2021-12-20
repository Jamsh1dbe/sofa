import React, { Component } from 'react'
import { Box } from './style'

export default class index extends Component {
    render() {
        return (
            <div>
                <Box>
                    <Box.Logo>
                        <Box.Logolion/> Furunking
                        <Box.Input></Box.Input>
                        <Box.Select></Box.Select>
                        <Box.Searchbutton>
                            <Box.Search/>
                        </Box.Searchbutton>
                        <Box.Packet/>
                        <Box.Bang/>
                        <Box.Contact/>
                    </Box.Logo>
                </Box>
            </div>
        )
    }
}
