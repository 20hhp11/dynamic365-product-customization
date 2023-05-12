/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { IProductCustomizationViewProps } from './product-customization';

const ProductCustomizationView: React.FC<IProductCustomizationViewProps> = props => {
    const { ProductCustomization, renderOption, renderEditOption, renderSizeOption } = props;
    return (
        <Module {...ProductCustomization}>
            <Node className='product-selection-container'>
                <Node className='product-header'>
                    <Node className='row'>
                        <Node className='col-6 text-center'>
                            <img
                                className='product-image'
                                src='https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630'
                            />
                        </Node>
                        <Node className='col-6'>
                            <Node className='product-name'>Oleato Golden Foam™ Cold Brew</Node>
                        </Node>
                    </Node>
                </Node>
                <Node className='product-main'>
                    <Node className='row'>
                        <Node className='col-6'>
                            <Node className='product-main-content-pad'>
                                <Node className='product-size-options-title'>Size options</Node>
                                <hr className='horizontal-separator' />
                                {renderSizeOption()}
                            </Node>
                        </Node>
                        <Node className='col-6'>
                            <Node className='product-main-content-pad'>
                                <Node className='product-size-options-title'>Customizations</Node>
                                <hr className='horizontal-separator' />
                                <Node className='product-customization-container'>{renderOption()}</Node>
                            </Node>
                        </Node>
                    </Node>
                </Node>
            </Node>
            {renderEditOption()}
        </Module>
    );
};

export default ProductCustomizationView;
