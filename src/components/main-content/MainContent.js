import React from 'react';
import Block from './Block';
import BlockTitles from './BlockTitles';
import BlockStyle from './BlockStyle';
import BlockContentTop from './BlockContentTop';
import BlockContentBottom from './BlockContentBottom';
import BlockContent from './BlockContent';
import BlockFilter from './BlockFilter';
import BlockList from './BlockList';
function MainContent() {
    return (
        <div className="main-content">
            <div className='content-left'>
                <Block>
                    <BlockTitles primary="Total Data" secondary="View Your Website" />
                    <BlockStyle>
                        <BlockContentTop />
                        <BlockContentBottom />
                    </BlockStyle>
                </Block>
                <Block>
                    <BlockTitles primary="Your Stats" />
                    <BlockStyle>
                        <BlockContent />
                    </BlockStyle>
                </Block>
                <Block>
                    <BlockTitles primary="Drafts" />
                    <BlockStyle>
                        <BlockFilter text='Filter by date'></BlockFilter>
                        <BlockList styleProps='bg brand' text='Coca-Cola' textMiddle='Website Traffic' textStyle='underline' textLeft='Continue'></BlockList>
                        <BlockList styleProps='bg brand' text='Adidas' textMiddle='Website Traffic' textStyle='underline' textLeft='Continue'></BlockList>
                    </BlockStyle>
                </Block>
            </div>
            <div className='content-right'>
                <Block>
                    <BlockTitles primary="Top Good Advertising" />
                    <BlockStyle>
                        <BlockFilter text='Filter by Stats'></BlockFilter>
                        <BlockList percentage='45%' styleProps='percentage' text='Name of Advertisin..' textMiddle='Facebook' textLeft='2,570 View'>45%</BlockList>
                        <BlockList percentage='11%' styleProps='percentage' text='Add for My Website G...' textMiddle='Google' textLeft='2,000 Clicks'>11%</BlockList>
                        <BlockList percentage='25%' styleProps='percentage' text='Facebook Notificatio...' textMiddle='Facebook' textLeft='50 Reach'>25%</BlockList>
                        <BlockList percentage='10%' styleProps='percentage' text='Nukris Add for Website...' textMiddle='Facebook' textLeft='1,000 Clicks'>10%</BlockList>
                    </BlockStyle>
                </Block>
                <Block>
                    <BlockTitles primary="Top Bad Advertising" />
                    <BlockStyle>
                        <BlockFilter text='Filter by Stats'></BlockFilter>
                        <BlockList percentage='45%' styleProps='percentage red' text='Name of Advertisin..' textMiddle='Facebook' textLeft='2,570 View'></BlockList>
                        <BlockList percentage='11%' styleProps='percentage red' text='Add for My Website G...' textMiddle='Google' textLeft='2,000 Clicks'></BlockList>
                        <BlockList percentage='25%' styleProps='percentage red' text='Facebook Notificatio...' textMiddle='Facebook' textLeft='50 Reach'></BlockList>
                        <BlockList percentage='10%' styleProps='percentage red' text='Nukris Add for Website...' textMiddle='Facebook' textLeft='1,000 Clicks'></BlockList>
                    </BlockStyle>
                </Block>
            </div>
        </div>
    )
}

export default MainContent