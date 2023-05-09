/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import { Module } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { IProductCustomizationViewProps } from './product-customization';

const ProductCustomizationView: React.FC<IProductCustomizationViewProps> = props => {
    const { ProductCustomization, renderOption, renderEditOption, renderSizeOption } = props;
    return (
        <Module {...ProductCustomization}>
            <div>
                <div className='product-selection-container'>
                    <div className='product-header'>
                        <div className='row'>
                            <div className='col-6 text-center'>
                                <img
                                    className='product-image'
                                    src='https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630'
                                />
                            </div>
                            <div className='col-6'>
                                <div className='product-name'>Oleato Golden Foam™ Cold Brew</div>
                            </div>
                        </div>
                    </div>
                    <div className='product-main'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='product-main-content-pad'>
                                    <div className='product-size-options-title'>Size options</div>
                                    <hr className='horizontal-separator' />
                                    {renderSizeOption()}
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='product-main-content-pad'>
                                    <div className='product-size-options-title'>Customizations</div>
                                    <hr className='horizontal-separator' />
                                    <div className='product-customization-container'>{renderOption()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {renderEditOption()}
            </div>
        </Module>
    );
};

export default ProductCustomizationView;
