import React, { Component } from 'react'
import { Box } from './style.js'
export default class index extends Component {
    render() {
        return (
            <div>
                <Box>
                    <Box.All1>
                        <Box.Free/>
                        <Box.Divv>
                            <Box.P>Free Shopping</Box.P>
                            <Box.P2>Orders over $100</Box.P2>
                        </Box.Divv>
                        
                    </Box.All1>
                    <Box.All>
                        <Box.Prize/>
                        <Box.Divv>
                            <Box.P>Smart Gift Card</Box.P>
                            <Box.P2>Buy $1000 to get card</Box.P2>
                        </Box.Divv>
                    </Box.All>
                    <Box.All>
                        <Box.Wellet/>
                        <Box.Divv>
                            <Box.P>Quick Payment</Box.P>
                            <Box.P2>100% secure payment</Box.P2>
                        </Box.Divv>
                    </Box.All>
                    <Box.All>
                        <Box.Earphone/>
                        <Box.Divv>
                            <Box.P>24/7 Support</Box.P>
                            <Box.P2>Quick support</Box.P2>
                        </Box.Divv>
                    </Box.All>
                </Box>
            </div>
        )
    }
}
