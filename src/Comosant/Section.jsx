import { useState } from "react"

export default function Section(props){
    const {them} = props
    const [display,setDesplay]=useState('d-none')
    const HandlerDisplay = () => {
        display === 'd-none'?setDesplay('d-flex'):setDesplay('d-none')
    }
    return(
        <div className="py-3">
            <div className='imageProfile d-flex aligne-items-center justify-content-center'>
                <img onClick={HandlerDisplay} className='m-3' src="/WhatsApp Image 2023-04-04 at 01.16.43.jpeg" alt="" />
            </div>
            <h4 className='txt w-100 text text-center'>KHALID SBITI</h4>
            <h6 className='txt w-100 text text-center'>web devlopper</h6>
            <div className="d-flex aligne-items-center justify-content-center">
                <a target="_blank" href="https://www.linkedin.com/in/sbiti-khalid/">
                    {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg=="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUpJREFUSEvllb0uRFEUhb8loxNRUHkDWo2OQqUQgiF0Et5C4jH8lIgZP6HQCaPR6D2BTlRassyRM5MRdyZncu9M43Y3d+/17b3O3veIHj/qsT79Bdh+AGZydlWTNNvQ+NWBbecU/0mX1NTtBLiNsPluoSmAE0mbQdj2KbDeDSQFcChpOwKOgK2iAR/AMTAAbABDRQPegJcoOgGMAY/xfRwYAfaBT2ASWG4tIMWiiqS1aNEZUG4k2V4EniW9NkRt79aHZ685mglTVJVUjoBKvZvVYJekzDG2XQLegeHUMW0LsD0I3ABTASypFgt5AqaLAIQtvY92HEjaiYBrYKEIQDiDqwjI6jRpk88lBd/DolWBFaAk6cv2EnAZAReSwrfWuH8C6LRoo3G5gjNZcUkWdfNn+BPbaZOLuHDuJM1lXji5ym6T3N87uRcdfAO8QNMZrOQi+QAAAABJRU5ErkJggg=="/>
                    }
                </a>
                <a target="_blank"  href="https://github.com/SBITI-KHALID">
                {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/>                
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAm9JREFUSEvFlU2IjlEUx39/kQ1ZIMkS5XOKZKGmiBI2hmKkKBn5Sk0yPko0+WgojeQj7AglzIYdCwuUiHyWSRYWPposTApxPGe6z3TfO8/7zjOLydm87z33f+7/nnPP+T9ikE2DfD41CcxsGLAcWALMBCZDT8wH4DlwJ/PfkPS72kWrEpjZIuAsMKmfLN8DmyTdLcIVEpjZbuBouG2ZKv4F9kg6noL7EJhZC9BW5tQCTLOk9thfQWBmCwBP1f1e3w3AFmA/MAToBLzeUwG/9RHgDHAKWBl89ZIe5CS9BGY2HHgFTAybrZIO+H8z83f4LOl7WI8Axkt6F9b7gMMh7jVQJ+mPr2OC1cC1KL12Sc1lSmVmx4BdEXaZJK9ABcFlYG0EmifpYUmCuqydn0XnnZa0PSXw8kzL05Q0vczhOcbMngCzw/pxlsHclOALMDYAOiQ1DJDgCrAmxHRJGpMSfMoGa1wA3JO0cIAEt4GlIaZb0siU4CkwKwC8W0bXkoCYPEjKV2BU8L+V5K1c8cgXgI1RYJOki2WyMLMm4HyEvSRpXUrgNb8JfAO6vc99/F2PJP0oIjIzn4dtYeB8EHNblTXJ9ZTAZ8I7aQKwGNgMrAd+halulPTTg0JJbgXc0IT8DTBDkk96pVyb2QqX36xUH4E5YfDmhyy2JnW/CjQWZNYgqSP3F4ndSWCH64+kQ9XewMwOZsn0SElkJzI52Rk7qsm1i1srcD8TsRfAS0nnkgx833G5tZSS6xxtZvWAS69PZ5skf/BeMzNX0r3AI8Bl2n/7WH+fTN/3T2anJM8kJpjisi3JH7uq/d+Pfq2bld37B8MT0hliYf0NAAAAAElFTkSuQmCC"/>                    
                    }
                </a>
                <a href="#">
                {them === "clear"?
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO1JREFUSEvt1T9OAkEYhvEfnQ2egNJQUVFYEiiUC3ADKY1WXoATaKjlDrZooq0JlVaGxIrEC5BQ+i+DbFYghJklFm41yWaeZ7/325mvpOCnVDDfzgX3aEZW9YDWnJGv4D0S/osbI/j6mFdMArWOclj/cLcVPKGDcabiRxymEExRxVsuzmSCWxwHeAO91BENcBKglzhf8mNE9SAr6OM0leACo5D9S4AeoBLWN9iPaXIbwxXnZA+zzLutIlonqOE5VjDfX1gP/gXfCWxym/7tHmwycK4/r+hu6PgVznJn4w5HqwZOonmzwOx8Jiev4ANsbjkZwHaFhAAAAABJRU5ErkJggg=="/>                
                    :
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPtJREFUSEvtlT1OgkEURc/tbHAFlMaKioLSYCFswB1gSaByA65AYq17sFUSbE2ooDIkVCRswMTyGsh85AOJIc6MsXD6d8/7mfueyPyUWZ/fBdgeAc3Iql4knRcaWxXYdqT4OlzSRjcGsEpmDixCUnWgkgowAS4lzYqKbb8CjRSAd+BU0rLczpSAZ0mtlbjtM+AmdYseJHUC4Bbo736M2CGXAXdANxXgGhgDS0lvoYIToBoAj8BxzJDbkp72+cT2EfCxMdcPffAdoAZMYwFFfLYZ/APWzjxkm/7tGRxycO4lXQWjDYDejjeGki72HpwUx+bL2sghWtbMfvQ/AXhNnBlwviRnAAAAAElFTkSuQmCC"/>
                    }
                </a>
                </div>
                <table className=" infor w-100 txt text text-center my-4">
        <tbody id="infoTableBody">
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfRJREFUSEvN1cvLTWEUx/HPS0kuZUBIihBC7gPlMqAkMaCM3OMfUEaMlBFmjEQMxEAyMDATSRISEZFLEWWgFAOEZ2mdOu92zpu9T2/Zders55z9+z7Pb631230G+eobZH3dABNwBb+wAR+abqQTYBxuYXqKvsCKppAqIMRvYBZeJ2AKnmNlE0gVELasxxssT4uuYxriJAF5X8euKuAHhmIy3qZQ1ONanuoBFvYC+IzRGIUvHQB3sbQXwCPMzc/jFLqfu47fVuNjL4DTxf9dpcA7cTaFokXHYxlu1xGP/1ZrsLv4fwrnSlG3ptgZ7Ci2HS227e8VEG0aO/6OifiExQjvv2E+ntaBdBq0i9iMwziYYidLV+3J9t2CO7keG7raNvF/tXAnwDw8zB0vKbAo7ogUnZPCl3AEJ7Ao12IYV1XnpFsWHcO+nOYYuHcJOZ5N0O7Sq7yZmhPfD9INMDwjI3r+JTai1bYL0rpNeIY1CYhhnFGFDBTXY8vDNzEzh25v+X5+gAK3T/y9ksZhb9e4bumMweX0NtYuZKu2YqSdFwWP3JpdIv6fASEwJEUPYRh+pl3RbZG8kbpfUzxSuF8o1nmjTSrzcaDUZHvpoJFdrIqCx7sjmuLPVQfQeiZOsQ7bMpvCxrieYG1bCjcG1BnkRif4vwC/Ab0RYxl9FmQXAAAAAElFTkSuQmCC"/>
                    :    
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiJJREFUSEu1lc+LjWEUxz9fapr8qFmYmKSICTExjIUaLEZJYkFZMYzGP6BmxUrNytixErEQC8nCwk4jSRrSTETkR81EWSg1FsjxnDq37n3v++a+93bfuov7Ps9zPuf5nvM9r2jzozbHJxdgZiuA+4ABByV9bTaROoCZdQNPgHUR9D2wq1lIDSCCPwI2AJ8CsBp4B+xuBpIFuCwHgM/AYEg0CawF/CYO+VJGrizgD7AQWCVp1gNFPR7GrV5K6m8F8ANYCiyRNJ8DmJK0oxXADLDZf5JeBeAF4Fn72pCkb60AriX9R1KBT0q6EQBv0eXATklPywT3vdkanEr6XwVuSjoWgOvAiSTbRJJtrFWAe8Az/g30SPpuZtuBKeAXsEXSmzKQPKPdSXofAcYlnYtbXAFGo32PSnoW7z2hB1WOr2vhPEAfMB0ZD0iaMbNFgAfdFNnfBS4Al4Ft8c7NuCfrk6JZdBE4E24elDQXkEvRBNUqfYw/a8LxNZAiQCfgI8N7/gNwqKpttwIu3WHgLbA3AG7G3iykcFyb2bJ0+DGwHnDTnZZ0q6jAGcc/lzRQ16bZw2bWBdxzbWPtdoKNVcZI9f4YlD63NqYR3xggOmWBBwXOAx3AX8Bd7t3mMvrU/Ql4cJ/CNUOx4S+ama1M/jibajKcOmhxgVRecP92zFXWGwZUDpiZ32I/cNxnE+Ay+vMa2JeVrzSgjIv/W+SywfL2t/0G/wAOa8MZSMiv9QAAAABJRU5ErkJggg=="/>                    
                    }
                </td>
                <td className="px-2">0625092086</td>
            </tr>
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUlJREFUSEvd1T8ohWEUx/GPJIPBZJBSMmCwW2xGpbBSNmVSBhbJRCmTsilWfxaZbBYzA5OQMpgMBsmfe/S8um73ute93eWe5an3vM/5nt/vvM/zNqlzNNW5vsYCjGEN/TXadoUFnESdfIse0FVj8Wz7DXoLAZ8pO4DrKkGhPhT81M5XkAFeMI3Df0LGsYu2coCs7gYW8V4G1JxmF77nx3fzxRTMYButOMMEnkpAOnCAYbxiFjvlFAR0EMfoxiNC/nkBZCjZ2Il7jOaauURmdUkFmap27GMEb5jHVoLMYRMtOMVkLv+cchUDMgtXsJw276V1Kq2RW83rOh7/C5C5EipCTaiKiG6j6+i+MKoCRJEeHOXUfKSZ3JYYfNWASo9FAwPu0ndfqRV/vRfziZn9OslxXa+jr0bCRe5ULxW7rmusW3x7Y/0y62LRF2qEQhkl8rgIAAAAAElFTkSuQmCC"/>                    :    
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXVJREFUSEvdlS9IZFEUxn8fIgaDySALghh0w/YtNuOCMFoVbIJJMLhlkU0KgmnBtuDW3bWIyWYxa9AkowgGk8Egsn7rGe6TmdF5vpnHlLnlhnPv+Z3vO/eP6PJQl/PTQwDbM8AGMFnStjNgVdJB5HmxyPY18KFk8mz7haTxZoBT9KOk805AtkN9KEBSrfh6BRngHliQ9LcdiO0KsAsMvgfI8m4Ba5L+5YFs96Xerdavy1OwCOwAA8ARMCvp9i2I7WHgDzAFPABLwM9cBUG2/QnYB0aBG6Ai6bgeYvszEDaOAFfAF0mntmtWt1SQBWwPAb+BaeARWJH0IzbbXga2gX7gEJiTdJdixQBpcRyCdeBbqv5XmufTHLHvITpTV1hBkx2hItSEqhhRbVQd1TeMjgBJzRiw96zmKfWk2qLxxS1q5x6UsqgdUMcWFYXkAS7TuS+aK29dVVL0rOEtiud6E5goSTh5vtVfXz3XJZO23N5DX2a3LPoPOrOrGWF3AyAAAAAASUVORK5CYII="/>                    
                    }
                </td>
                <td className="px-2">sbitikhalid0@gmail.com</td>
            </tr>
            <tr>
                <td className="icon">
                {them === "clear"?
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAlxJREFUSEu11cmrj1EYB/DPNacMkTlEhDIryZRhIUNio4iSIRIbFuIPYIMSJSFFkmkhkY0pQ4kimYWMmZUkM+epc3Vd9zeEe3bv2znP93yH5zkVanlV1HJ95QB0wnRMQL98oUs4gt14XOySxQCaYicmFynwA3sxBx9q2lcIoDHOozc+YTPW414u0hVLMR8N8t4R+FIdpBDADszCI4zDjQIs+uJoukA7rMOycgD64Aq+Jp0HI/Rui62p2JBc4GzSfh5eYiRO4TO64GlVkJoYbMBibMSSXLwSpOrZYNcfb7ALMxLISqwuBXAH3bL+17LRM3Ew+bEiH16bdB+fvVmYGIxOTI7jdGb0C6MmBmFqGFcX35ORT9AebfCiisl3U3oeojNaJLavM5uWpRi8RXM0wfuc8w7oWCXz0RsP8nf8j73vEGcDrCiDixiUmqhH0vV2uuF2zM4SLUejxHBVbrxt2exeuI4LORhFAbbkQ2FwGN0KV9G6WgSjg8PkkCbiuSbJuCnJuKgUgzE4hsvp1gPy5vCgMqbhyxkswHPUwc2UpO4YhnOlAML4+9m8KVmaYuMmEhYj5RZ6ltNosWca9uAZovFeFUAI80O+CMUkHC4XIPadwKjcpWPxrdrhhlmOgSkUhwoNxWLTNMZDNFrELtISgy2mZ6x62Jd8CgmjF8LsiOgfq9R7MDSxOIn6iAE4N8c03oGQJEZ0GBuBqHGVAohDU9PY2J/TEo9MvBPD8xifmBNXMATlAMTh8OAAmuVKYX48RNFYRVe5AFEkujWS9TFr/9tY/heJSl3yvzH4K6CfFgx2GUKNzOIAAAAASUVORK5CYII="/>                    
:    
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqNJREFUSEu1ldmrz1EUxT/LnDJE5q4bEcqsJFOGBxkSL4ooGSK5LzyIP4AXlCgJKZJMDxJ5MWUoUSSzkDGzkmS8y9l16OL3+31vyn495+y191pr7yP+c+g/56cQwHZXYCYwCRiQC7oMHAX2SHpSqciyALZbAruAqRUSGNgHzJP0sdS9kgC2mwMXgL7AZ2ALsEHS/UhiuzuwDFgINMl3R0n6+idIOYCdwBzgMTBB0s1S1dnuDxxLBXQC1ktaXghgux9wFfiWeB4q6bLtjsC2lGxYTnAOWCDple3RwGngC9BN0rO6IH91YHsjsBTYJKkmJw9RA6RuRHcDJb21vRuYlUBWSVpTBHAX6BH8S7puO4SeDRxKeqzMj9cl3ieGNpIW2x4LnADOSIqOfkWpDkLUEK6hpFrbT4HOQAdJL+uIfC+555GkatttgDfAW0ltiwDeAa2BFpI+2A6fdwGqfno+z8bDpMMTSVW2WyRXvQfeSQqwih1cAoakIeol6Y7tHcDcTNEKoFnqcHUevO0JdIHtPsAN4KKkoUUAW8MhqeUaSZtstwOuAe3/EDk6C5Hf2A57rk00bk40LikCGAccB65IGpQ5Dw1+2rQWOAsskvTCdgPgFtATGCHpfBFACP8AqE4g0xJIuKds2A6HhdNuS+pdOGi54hnAXuA50E/S6zKTHOIHfWGKKZKO1Asgg5wExuQpHS/pe93HtpsCQcfgZIrDkkouxUrbNCb3OhC22x6LTVJsz1h2jYD9QWHMQhY77P1XVPwPbA9PXZwCGgOxAOdnm+4JSoBY0SHslXIi1efDmZ7WxgEg3BKfTPwTI/ManywpHFc2CgEyJeOT2AeBVjlTiD9V0sVKyeOsXgAZJKY1nPUp2/e3tfzPFBVVWHRe7w6KEpU7/wEt+foZEMvsVwAAAABJRU5ErkJggg=="/>                    }
                </td>
                <td className="px-2">SIDI ABDALAH GHIAT</td>
            </tr>
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALNJREFUSEvdlUEKgzAQRZ/nEATpot7Gy3TTG7QX6kHcuBMF79FSMBQi099Mq1izCzPz//yfSZKx8MoWxkcR3KcGrDwVX5+gBi5A5bSuBU7ALdTH0kcgd4KHsg44WATB0y85XtbHClYjUNNlKZxNlaVgPwSx5NT97KKlAqh8SZA6rts7ZGWBikuLFICKS4L/P4OfKxiAIhU1yu+B0nqunx/OFTg6SRrg/O7DceLaZd5X8+NGHks5NBnCpFrAAAAAAElFTkSuQmCC"/>
                :   
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALhJREFUSEvtlk0KwjAQhb93DkEQF3qbXsaNN9ALeRA37sSC9xhpoWDbJEMiEZHOLkzmvbz5SSIqmyrjkyQwM+sOICm4z/P3sSkFHoDnnxGYWQOcgH1h6m7AQdJliB8pMLMnsCoEH8LukrYxgj7nn9p7zaYKvkMQ6xpPWajoQQX/QzCVnLsOzcFocnMBlxqQm7KlBrPB/okuaoG1d+c4/oekTey67h6cM7ArJLkCx+iDUwiaDKv+q3gBXGS+GZicyfwAAAAASUVORK5CYII="/> 
                }
                </td>
                <td className="px-2">29/10/2003</td>
            </tr>
        </tbody>
    </table>
            <div className="w-100 text text-center">
                <button className="dwnCV">
                <img className="px-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOVJREFUSEvtlb0NwjAUhO/IgxFSIlFR0afKCmwBMzACI5BBGICKGhaANiOAnYcShQgiTP6UAgW3tu/z3Xu2iZ4He9bHwABqjKaRUqS289oLU+E/oLJjBx6Ry74aswOwcuQXUWT9OlfWKdrUCVAdw9oDgKAEOcLzQpL3ToCs/1V9WHsG4OdiMTxvQTIuO2vs4Cmgt1uA0Sh1AiRJyMnk+Cm21oD8Jme1oEjk6ulOgMqL8uE5qSxyHdG6Rb4CmDYVdKy/UGSWxVkU0ZglVLcg550g5AmqG4rs3wCdRL9sbvQftDnE7wMe016DGSEbyqoAAAAASUVORK5CYII="/>                   
                Download CV
                </button>
            </div>
        </div>

    )
}