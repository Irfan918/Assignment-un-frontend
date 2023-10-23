import React, { useRef, useState } from 'react'
import style from './style.module.css'
import { Card } from './card/Card'
import { Model } from './model/Model'

export function Main({onclick}) {
    const cardRef = useRef();
    const[bool,setBool] = useState(true);
    function handleOverview(){
        if(bool){
        cardRef.current.style.display = "block";
        setBool(!bool);
        }
        else{
            cardRef.current.style.display = "none";
            setBool(!bool);
        }
    }

    return (
        <div className={style['main']}>
            <header className={style['header']}>
                <svg onClick={onclick} className={style['svgres']} style={{ marginTop: '0.2rem', marginLeft: '0.3rem' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_0_956)">
                        <path d="M18.75 22.5H3.75V20H18.75V22.5ZM26.25 7.5V10H3.75V7.5H26.25ZM18.75 16.25H3.75V13.75H18.75V16.25Z" fill="#1C4980" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_956">
                            <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)" />
                        </clipPath>
                    </defs>
                </svg>
                <span className={style['headerTitle1']}>Assessment</span>
                <svg className={style['svgHeader']} xmlns="http://www.w3.org/2000/svg" width="2" height="46" viewBox="0 0 2 46" fill="none">
                    <path d="M1 0V46" stroke="#DADCE0" />
                </svg>
                <span className={style['headerTitle2']}>My Assessments</span>                
            </header>
        
            <hr style={{ margin: '0px' }} />
            <div className={style['assessmentOverview']}>
                <div style={{ marginBottom: "1rem" }}>
                    <span className={style['assessmentTitle']}>Assessments Overview</span>
                </div>
                <div className={style['cardDetail']} ref = {cardRef}>
                    <div className={style['firstCard']}>
                        <span className={style['TotalAssessment']} >Total Assessment</span>
                        <div className={style['firstContent']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_0_483)">
                                    <path d="M15.8333 4.16667V7.5H3.33332V4.16667H15.8333ZM15.8333 12.5V15.8333H3.33332V12.5H15.8333ZM16.6667 2.5H2.49999C2.04166 2.5 1.66666 2.875 1.66666 3.33333V8.33333C1.66666 8.79167 2.04166 9.16667 2.49999 9.16667H16.6667C17.125 9.16667 17.5 8.79167 17.5 8.33333V3.33333C17.5 2.875 17.125 2.5 16.6667 2.5ZM16.6667 10.8333H2.49999C2.04166 10.8333 1.66666 11.2083 1.66666 11.6667V16.6667C1.66666 17.125 2.04166 17.5 2.49999 17.5H16.6667C17.125 17.5 17.5 17.125 17.5 16.6667V11.6667C17.5 11.2083 17.125 10.8333 16.6667 10.8333Z" fill="#6548EE" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_483">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className={style['number']}>34</span>
                        </div>
                    </div>
                    <div className={style['firstCard']}>
                        <span className={style['canditate']}>Candidates</span>
                        <div className={style['firstContent']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="8" fill="#EBE8FD" />
                                <mask id="mask0_0_489" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="10" width="20" height="20">
                                    <rect x="10" y="10" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_0_489)">
                                    <path d="M10.6787 26.9209V24.4082C10.6787 23.9051 10.8089 23.4427 11.0692 23.0209C11.3295 22.5992 11.6753 22.2774 12.1067 22.0554C12.9778 21.6215 13.8643 21.2953 14.7664 21.0767C15.6684 20.8581 16.5845 20.7488 17.5148 20.7488C18.4514 20.7488 19.3707 20.8573 20.2729 21.0742C21.1751 21.2911 22.0584 21.6166 22.9228 22.0504C23.3542 22.2719 23.7 22.5931 23.9604 23.0139C24.2207 23.4347 24.3508 23.8994 24.3508 24.4079V26.9209H10.6787ZM26.0922 26.9209V24.2565C26.0922 23.6321 25.9237 23.0304 25.5868 22.4512C25.2498 21.8721 24.7639 21.3563 24.1289 20.9037C24.8007 20.9937 25.4358 21.1369 26.0342 21.3333C26.6327 21.5297 27.1961 21.7687 27.7245 22.0504C28.2377 22.3282 28.6321 22.656 28.9076 23.0338C29.1832 23.4117 29.3209 23.8242 29.3209 24.2714V26.9209H26.0922ZM17.5148 19.9155C16.5715 19.9155 15.766 19.5816 15.0983 18.9139C14.4306 18.2462 14.0967 17.4407 14.0967 16.4974C14.0967 15.5542 14.4306 14.7487 15.0983 14.081C15.766 13.4133 16.5715 13.0794 17.5148 13.0794C18.458 13.0794 19.2635 13.4133 19.9312 14.081C20.5989 14.7487 20.9328 15.5542 20.9328 16.4974C20.9328 17.4407 20.5989 18.2462 19.9312 18.9139C19.2635 19.5816 18.458 19.9155 17.5148 19.9155ZM26.0922 16.4974C26.0922 17.4373 25.7576 18.242 25.0884 18.9114C24.4192 19.5808 23.6147 19.9155 22.675 19.9155C22.5184 19.9155 22.3236 19.8973 22.0909 19.8609C21.8581 19.8245 21.6586 19.7822 21.4926 19.7338C21.8742 19.2828 22.1666 18.78 22.3696 18.2255C22.5727 17.6711 22.6742 17.0953 22.6742 16.4982C22.6742 15.9011 22.5727 15.325 22.3696 14.7701C22.1666 14.2151 21.8742 13.7121 21.4926 13.261C21.6903 13.1882 21.8864 13.1398 22.0809 13.1156C22.2753 13.0915 22.4723 13.0794 22.6718 13.0794C23.6124 13.0794 24.4176 13.4141 25.0875 14.0834C25.7573 14.7528 26.0922 15.5574 26.0922 16.4974ZM12.5745 25.0251H22.455V24.4331C22.455 24.2836 22.4168 24.1476 22.3404 24.0253C22.264 23.9029 22.1633 23.8077 22.0383 23.7397C21.3082 23.378 20.5662 23.1051 19.8123 22.9209C19.0584 22.7367 18.2925 22.6446 17.5148 22.6446C16.7436 22.6446 15.9778 22.7367 15.2172 22.9209C14.4566 23.1051 13.7146 23.378 12.9912 23.7397C12.8662 23.8077 12.7655 23.9029 12.6891 24.0253C12.6127 24.1476 12.5745 24.2836 12.5745 24.4331V25.0251ZM17.514 18.0943C17.9529 18.0943 18.3289 17.9381 18.642 17.6255C18.9551 17.3129 19.1117 16.9372 19.1117 16.4982C19.1117 16.0593 18.9554 15.6833 18.6428 15.3702C18.3302 15.0571 17.9545 14.9005 17.5155 14.9005C17.0766 14.9005 16.7006 15.0568 16.3875 15.3694C16.0744 15.682 15.9178 16.0577 15.9178 16.4966C15.9178 16.9356 16.0741 17.3116 16.3867 17.6247C16.6993 17.9378 17.075 18.0943 17.514 18.0943Z" fill="#6548EE" />
                                </g>
                            </svg>
                            <div style={{ marginRight: '1rem' }}>
                                <span className={style['number']}>11,145</span>
                                <span style={{ color: '#05C165', fontFamily: 'Inter', fontSize: '0.75rem', lineHeight: '140%' }}>+89</span>
                                <span className={style['totalSize']}>Total Candidate</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                                <path d="M1 0V40" stroke="rgb(135 139 148)" />
                            </svg>
                            <div style={{ marginLeft: "2rem", marginRight: '4rem' }}>
                                <span className={style['number']}>1,14</span>
                                <span style={{ color: '#05C165', fontFamily: 'Inter', fontSize: '0.75rem', lineHeight: '140%' }}>+89</span>
                                <span className={style['whoAtemped']}>Who Attamped</span>
                            </div>
                        </div>

                    </div>

                    <div className={style['firstCard']}>
                        <span className={style['canditate']}>Candidates Source</span>
                        <div className={style['firstContent']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="8" fill="#FCE8EF" />
                                <mask id="mask0_0_508" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="10" width="20" height="20">
                                    <rect x="10" y="10" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_0_508)">
                                    <path d="M17.8333 26.2917C17.5833 25.8334 17.3645 25.3577 17.177 24.8646C16.9895 24.3715 16.8333 23.8611 16.7083 23.3334H14.25C14.6527 24.0278 15.1562 24.632 15.7604 25.1459C16.3645 25.6597 17.0555 26.0417 17.8333 26.2917ZM13.5416 21.6667H16.375C16.3333 21.3889 16.302 21.1146 16.2812 20.8438C16.2604 20.5729 16.25 20.2917 16.25 20C16.25 19.7084 16.2604 19.4271 16.2812 19.1563C16.302 18.8854 16.3333 18.6111 16.375 18.3334H13.5416C13.4722 18.6111 13.4201 18.8854 13.3854 19.1563C13.3507 19.4271 13.3333 19.7084 13.3333 20C13.3333 20.2917 13.3507 20.5729 13.3854 20.8438C13.4201 21.1146 13.4722 21.3889 13.5416 21.6667ZM14.25 16.6667H16.7083C16.8333 16.1389 16.9895 15.6285 17.177 15.1354C17.3645 14.6424 17.5833 14.1667 17.8333 13.7084C17.0555 13.9584 16.3645 14.3403 15.7604 14.8542C15.1562 15.3681 14.6527 15.9722 14.25 16.6667ZM18.4166 16.6667H21.5833C21.4166 16.0556 21.2013 15.4792 20.9375 14.9375C20.6736 14.3959 20.3611 13.875 20 13.375C19.6388 13.875 19.3263 14.3959 19.0625 14.9375C18.7986 15.4792 18.5833 16.0556 18.4166 16.6667ZM23.2916 16.6667H25.75C25.3472 15.9722 24.8437 15.3681 24.2395 14.8542C23.6354 14.3403 22.9444 13.9584 22.1666 13.7084C22.4166 14.1667 22.6354 14.6424 22.8229 15.1354C23.0104 15.6285 23.1666 16.1389 23.2916 16.6667ZM20 28.3334C18.8611 28.3334 17.7847 28.1146 16.7708 27.6771C15.7569 27.2396 14.8715 26.6424 14.1145 25.8854C13.3576 25.1285 12.7604 24.2431 12.3229 23.2292C11.8854 22.2153 11.6666 21.1389 11.6666 20C11.6666 18.8472 11.8854 17.7674 12.3229 16.7604C12.7604 15.7535 13.3576 14.8715 14.1145 14.1146C14.8715 13.3577 15.7569 12.7604 16.7708 12.3229C17.7847 11.8854 18.8611 11.6667 20 11.6667C21.1527 11.6667 22.2326 11.8854 23.2395 12.3229C24.2465 12.7604 25.1284 13.3577 25.8854 14.1146C26.6423 14.8715 27.2395 15.7535 27.677 16.7604C28.1145 17.7674 28.3333 18.8472 28.3333 20C28.3333 20.1389 28.3298 20.2778 28.3229 20.4167C28.3159 20.5556 28.3055 20.6945 28.2916 20.8334H26.6041C26.6319 20.6945 26.6493 20.559 26.6562 20.4271C26.6632 20.2952 26.6666 20.1528 26.6666 20C26.6666 19.7084 26.6493 19.4271 26.6145 19.1563C26.5798 18.8854 26.5277 18.6111 26.4583 18.3334H23.625C23.6666 18.6111 23.6979 18.8854 23.7187 19.1563C23.7395 19.4271 23.75 19.7084 23.75 20V20.4271C23.75 20.559 23.743 20.6945 23.7291 20.8334H22.0625C22.0763 20.6945 22.0833 20.559 22.0833 20.4271V20C22.0833 19.7084 22.0729 19.4271 22.052 19.1563C22.0312 18.8854 22 18.6111 21.9583 18.3334H18.0416C18 18.6111 17.9687 18.8854 17.9479 19.1563C17.927 19.4271 17.9166 19.7084 17.9166 20C17.9166 20.2917 17.927 20.5729 17.9479 20.8438C17.9687 21.1146 18 21.3889 18.0416 21.6667H20.8333V23.3334H18.4166C18.5833 23.9445 18.7986 24.5209 19.0625 25.0625C19.3263 25.6042 19.6388 26.125 20 26.625C20.1527 26.4028 20.2986 26.1771 20.4375 25.9479C20.5763 25.7188 20.7083 25.4861 20.8333 25.25V28.2917C20.6944 28.3056 20.559 28.316 20.427 28.3229C20.2951 28.3299 20.1527 28.3334 20 28.3334ZM26.625 27.8125L24.1666 25.3542V27.2084H22.5V22.5H27.2083V24.1667H25.3333L27.7916 26.625L26.625 27.8125Z" fill="#E9407A" />
                                </g>
                            </svg>
                            <div style={{ marginRight: '1rem' }}>
                                <span className={style['number']}>11,000</span>
                                <span style={{ color: '#05C165', fontFamily: 'Inter', fontSize: '0.75rem', lineHeight: '140%' }}>+89</span>
                                <span className={style['totalSize']}>E-mail</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                                <path d="M1 0V40" stroke="rgb(135 139 148)" />
                            </svg>
                            <div style={{ marginLeft: "2rem", marginRight: '2rem' }}>
                                <span className={style['number']}>145</span>
                                <span style={{ color: '#05C165', fontFamily: 'Inter', fontSize: '0.75rem', lineHeight: '140%' }}>+89</span>
                                <span className={style['whoAtemped']}>Social Share</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                                <path d="M1 0V40" stroke="rgb(135 139 148)" />
                            </svg>
                            <div className = {style['uniqueLink']}>
                                <span className={style['number']}>145</span>
                                <span style={{ color: '#05C165', fontFamily: 'Inter', fontSize: '0.75rem', lineHeight: '140%' }}>+89</span>
                                <span className={style['whoAtemped']}>Unique Link</span>
                            </div>
                        </div>

                    </div>

                    <div className={style['firstCard']}>
                        <span className={style['TotalAssessment']}>Total Purpose</span>
                        <div className={style['firstContent']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="8" fill="#E5F1FC" />
                                <mask id="mask0_0_533" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="10" width="20" height="20">
                                    <rect x="10" y="10" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_0_533)">
                                    <path d="M19.0921 24.3362H15.8335C14.6339 24.3362 13.6113 23.9135 12.7657 23.068C11.9202 22.2225 11.4974 21.2 11.4974 20.0005C11.4974 18.801 11.9202 17.7784 12.7657 16.9326C13.6113 16.0869 14.6339 15.6641 15.8335 15.6641H19.0921V17.5599H15.8356C15.1572 17.5599 14.5805 17.7972 14.1056 18.2716C13.6307 18.7461 13.3933 19.3223 13.3933 20.0001C13.3933 20.678 13.6307 21.2541 14.1056 21.7286C14.5805 22.2031 15.1572 22.4403 15.8356 22.4403H19.0921V24.3362ZM16.5522 20.8733V19.1269H23.4481V20.8733H16.5522ZM20.9082 24.3362V22.4403H24.1647C24.8431 22.4403 25.4198 22.2031 25.8947 21.7286C26.3696 21.2541 26.607 20.678 26.607 20.0001C26.607 19.3223 26.3696 18.7461 25.8947 18.2716C25.4198 17.7972 24.8431 17.5599 24.1647 17.5599H20.9082V15.6641H24.1668C25.3665 15.6641 26.3891 16.0868 27.2346 16.9322C28.0801 17.7777 28.5029 18.8002 28.5029 19.9997C28.5029 21.1993 28.0801 22.2219 27.2346 23.0676C26.3891 23.9133 25.3665 24.3362 24.1668 24.3362H20.9082Z" fill="#0073E6" />
                                </g>
                            </svg>

                            <span className={style['number']}>11</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style['assessmentSection']}>
                <div className={style['myassessment']}>
                    My Assessment
                </div>
                <div className={style['assessmentLogo']}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clip-path="url(#clip0_3566_282)">
                            <path d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z" fill="#1C4980" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3566_282">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_3566_286)">
                            <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="#1C4980" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3566_286">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg onClick={handleOverview} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="#1C4980" />
                    </svg>

                </div>
            </div>
            <div className={style['assessmentCard']}>
                <Model />
                <Card />
                <Card />
            </div>
        </div>
    )
}
