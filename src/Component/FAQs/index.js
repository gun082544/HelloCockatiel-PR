import React, { Component } from 'react'
import Woodsign from './Woodsign'

export default class FAQs extends Component {
    state = {
        data:[
        {
            q: "ไข่กับไก่อะไรเกิดก่อนกันอ่ะคับ",
            a: "ไดโนเสาร์ค้าบ",
            class: "d-block col-lg-5 col-md-11 col-sm-12"
        },
        {
            q: "ไข่กับไก้อะไรเกิดก่อนกันอ่ะคับ",
            a: "แมวค้าบ",
            class: "d-block col-lg-5 col-md-11 col-sm-12"
        },
        {
            q: "วาดรูปไม่เป็นเข้าได้ม้าย",
            a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถ",
            class: "d-block col-lg-5 col-md-11 col-sm-12"
        },
        {
            q: "what",
            a: "WHAT",
            class: "d-block col-lg-5 col-md-11 col-sm-12"
        },
        {
            q: "what",
            a: "WHAT!?",
            class: "d-none d-lg-block col-5"
        },
        {
            q: "what",
            a: "WHAT!?2",
            class: "d-none d-lg-block col-5"
        }
    ]
}
    render() {
        return (
               <React.Fragment>
                   {
                        this.state.data.map((QA,i) => {
                        return (
                            <div className={QA.class} key={i}> 
                                <Woodsign q={QA.q} a={QA.a} />
                            </div>
                            )
                        })
                    }
               </React.Fragment>
        )
    }
}
