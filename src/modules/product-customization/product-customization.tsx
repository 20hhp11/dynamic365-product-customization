/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';

import { IProductCustomizationData } from './product-customization.data';
import { IProductCustomizationProps } from './product-customization.props.autogenerated';
import { IModuleProps } from '@msdyn365-commerce-modules/utilities';

export interface IProductCustomizationViewProps extends IProductCustomizationProps<IProductCustomizationData> {
    ProductCustomization: IModuleProps;
    renderEditOption: any;
    renderOption: any;
    renderSizeOption: any;
}

export interface IProductCustomizationState {
    showEditOptions: boolean;
    quantity: number;
    activeProductSizeNo: number;
}

/**
 *
 * ProductCustomization component
 * @extends {React.PureComponent<IProductCustomizationProps<IProductCustomizationData>>}
 */
class ProductCustomization extends React.PureComponent<IProductCustomizationProps<IProductCustomizationData>, IProductCustomizationState> {
    public constructor(props: IProductCustomizationProps<IProductCustomizationData>, state: IProductCustomizationState) {
        super(props);
        this.state = {
            showEditOptions: false,
            quantity: 1,
            activeProductSizeNo: 1
        };
    }

    public render(): JSX.Element {
        const ProductCustomizationViewProps = {
            ...this.props,
            ProductCustomization: {
                moduleProps: this.props
            },
            productState: { showEditOptions: this.state.showEditOptions },
            renderEditOption: this.renderEditOption,
            renderOption: this.renderOption,
            renderSizeOption: this.renderSizeOption
        };

        return this.props.renderView(ProductCustomizationViewProps) as React.ReactElement;
    }

    public renderSizeOption = () => {
        const activeProductSizeNo = this.state.activeProductSizeNo;
        const activeProductClass = `size${activeProductSizeNo}-active`;
        return (
            <div className='product-size-container'>
                <div className={`product-active ${activeProductClass}`}></div>
                <div onClick={() => this.selectSize(1)} className='product-size cursor-pointer'>
                    <div className={`size size-1 ${activeProductSizeNo === 1 ? 'active' : ''}`}></div>
                    <div className='size-title'>Tall</div>
                    <div className='size-quantity'>12 fl oz</div>
                </div>
                <div onClick={() => this.selectSize(2)} className='product-size cursor-pointer'>
                    <div className={`size size-2 ${activeProductSizeNo === 2 ? 'active' : ''}`}></div>
                    <div className='size-title'>Grande</div>
                    <div className='size-quantity'>16 fl oz</div>
                </div>
                <div onClick={() => this.selectSize(3)} className='product-size cursor-pointer'>
                    <div className={`size size-3 ${activeProductSizeNo === 3 ? 'active' : ''}`}></div>
                    <div className='size-title'>Venti</div>
                    <div className='size-quantity'>24 fl oz</div>
                </div>
                <div onClick={() => this.selectSize(4)} className='product-size cursor-pointer'>
                    <div className={`size size-4 ${activeProductSizeNo === 4 ? 'active' : ''}`}></div>
                    <div className='size-title'>Trenta</div>
                    <div className='size-quantity'>30 fl oz</div>
                </div>
            </div>
        );
    };

    public toggleEditOptions = () => {
        this.setState({
            showEditOptions: !this.state.showEditOptions
        });
    };

    public addQuantity = () => {
        const qty = this.state.quantity;
        this.setState({
            quantity: qty + 1
        });
    };

    public removeQuantity = () => {
        const qty = this.state.quantity;
        if (qty > 1) {
            this.setState({
                quantity: qty - 1
            });
        }
    };

    public selectSize = (no: number) => {
        this.setState({
            activeProductSizeNo: no
        });
    };

    private renderOption = () => {
        return (
            <div>
                <div className='product-customization-option'>
                    <div>Vanilla Syrup</div>
                    <div onClick={this.toggleEditOptions} className='option-edit-btn cursor-pointer'>
                        Edit
                    </div>
                </div>
                <div className='product-customization-option'>
                    <div>Toppings</div>
                    <div onClick={this.toggleEditOptions} className='option-edit-btn cursor-pointer'>
                        Edit
                    </div>
                </div>
                <div className='product-customization-option'>
                    <div>Preparation Method</div>
                    <div onClick={this.toggleEditOptions} className='option-edit-btn cursor-pointer'>
                        Edit
                    </div>
                </div>
                <div className='product-customization-option'>
                    <div>Tea</div>
                    <div onClick={this.toggleEditOptions} className='option-edit-btn cursor-pointer'>
                        Edit
                    </div>
                </div>
            </div>
        );
    };

    private readonly renderEditOption = () => {
        if (this.state.showEditOptions) {
            return (
                <div className='product-option-selection-container'>
                    <div className='overlay'></div>
                    <div className='product-option-selection-content'>
                        <div className='product-option-header'>
                            <span onClick={this.toggleEditOptions} className='option-close cursor-pointer'></span>
                        </div>
                        <div className='product-option-body'>
                            <div className='product-option-body-content'>
                                <h2>Falvours</h2>
                                <div className='product-customization-option'>
                                    <div>Add Brown Sugar Syrup</div>
                                    <div className='controls'>
                                        <div onClick={this.removeQuantity} className='cursor-pointer'>
                                            -
                                        </div>
                                        <div className='quantity'>{this.state.quantity}</div>
                                        <div onClick={this.addQuantity} className='cursor-pointer'>
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className='product-customization-option'>
                                    <div>Add Caramel Syrup</div>
                                    <div className='controls'>
                                        <div className='cursor-pointer'>-</div>
                                        <div className='quantity'>1</div>
                                        <div className='cursor-pointer'>+</div>
                                    </div>
                                </div>
                                <div className='product-customization-option'>
                                    <div>Add Cinnamon Dolce Syrup</div>
                                    <div className='controls'>
                                        <div className='cursor-pointer'>-</div>
                                        <div className='quantity'>1</div>
                                        <div className='cursor-pointer'>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };
}

export default ProductCustomization;
