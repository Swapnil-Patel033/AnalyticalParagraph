import { useState } from 'react';
import '../../assets/css/_sidebar.scss'
import { backEndRespons } from '../../utils/BackEndData/BackEnd';

function SideBar({ onCategorySelect, flag}) {

    const departments = [];

    backEndRespons[0].components.forEach((component) => {
        if (component.render && !departments.includes(component.department)) {
            departments.push(component.department);
        }
    });

    const handleCategorySelect = (category) => {
        onCategorySelect(category);
    };

    return (
        <>
            <div>
                <nav className={`main-menu ${flag ? 'WhiteBackground' : 'BlackBackgroundSiderBar'}`}>
                    <div>
                        <a className="logo" href="http://startific.com"></a>
                    </div>
                    <div>
                        <ul>
                            <li onClick={() => handleCategorySelect('all')}>
                                <a>
                                    <i class={`fa fa-building fa-lg  ${flag ? 'BlackColor' : 'WhiteColor'}`}></i>
                                    <span className={`nav-text  ${flag ? 'BlackColor' : 'WhiteColor'}`}>All</span>
                                </a>
                            </li>

                            {departments.map((department, index) => (
                                <li key={index} onClick={() => handleCategorySelect(department)}>
                                    <a>
                                        <i className={`fa fa-building fa-lg  ${flag ? 'BlackColor' : 'WhiteColor'}`}></i>
                                        <span className={`nav-text  ${flag ? 'BlackColor' : 'WhiteColor'}`}>{department}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default SideBar