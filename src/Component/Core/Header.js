import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import color from '../../Config/Color'
import { Mobile } from './Hidden'
import { Title } from './Text'

// const datenow = dayjs().format()
const datenow = dayjs('2019-09-26')
// const datenow = dayjs('2019-10-01')
const dateStartResgis = dayjs('2019-09-25')
const dateEndRegis = dayjs('2019-09-30')

const Button = styled.button`
  background-image:url('/images/Objects/plate-d2.png');
  background-repeat:no-repeat;
  background-size:100%;
  height:auto;
  width:180px;
   @media(max-width:576px) {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
    } 
`
const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const Hr = styled(Mobile)`
  background-color:${color.font1};
  border: solid ${color.font1} 1px;
  visibility:${dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'visible'
                : props => props.visible <=1  ? 'visible' : 'hidden'};
`

const text = [
  {
    text: "สาขาที่รับสมัคร",
    link: "Major"
  }, 
  {
    text: "ข้อมูลโครงการ",
    link: "About"
  }, 
  {
    text: "FAQs",
    link: "FAQs"
  }
] 

const Header = (props) => {
  console.log(dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow))
  return (
    <React.Fragment>
      {/* <Hr /> */}
      {
        text.map((data, i) => {
          return (
            <div className="mb-lg-5 text-center" key={i}>
              <Button className="btn pb-4 pt-4" key={i}>
                <A href={data.link} key={i}>
                  <Title key={i}>
                    {data.text}
                  </Title>
                </A>
              </Button>
              <Hr visible={i}/>
            </div>
          )
        })
      }
    </React.Fragment>
      
  )
}

export default Header
