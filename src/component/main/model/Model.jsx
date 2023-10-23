import React from 'react'
import style from './style.module.css';
export function Model() {
    return (
        <div>
            <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
               <div className={style['cardContent']}>
                <div className={style['logo']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                    <g clip-path="url(#clip0_0_553)">
                        <path d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z" fill="#0073E6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_553">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                </div>
                <span className={style['newassessment']}>New Assessment</span>
                <span className={style['childnewassessment']}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</span>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Create new assessment</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className={style['form']}>
                            <label htmlFor='text1' >Name of assessment</label><br/>
                            <input type='text' id='text1' placeholder='Type Here'/>
                            </div>
                            <div className={style['form']}>
                            <label htmlFor='text2'>Purpose of the text is</label><br/>
                            <select id='text2'>
                                <option>select1</option>
                                <option>select2</option>
                            </select>
                            </div>
                            <div className={style['form']}>
                            <label htmlFor='text3'>Description</label><br/>
                            <select id='text3'>
                                <option>Description1</option>
                                <option>Desription2</option>
                            </select>
                            </div>
                            <div className={style['form']}>
                            <label htmlFor='text4' >Skills</label><br/>
                            <input type='text' id='text4' placeholder='Type Here'/>
                            </div>
                            <div className={style['form']}>
                            <label htmlFor='text5' >Duration of assessment</label><br/>
                            <input type='text' id='text5' placeholder='HH:MM:SS'/>
                            </div>
                        </div>
                        <div class="modal-footer model">
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
