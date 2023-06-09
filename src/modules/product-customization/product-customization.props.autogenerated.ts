/**
 * Copyright (c) Microsoft Corporation
 * All rights reserved. See License.txt in the project root for license information.
 * IProductCustomization contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IProductCustomizationConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IProductCustomizationResources {
    resourceKey: string;
}

export interface IProductCustomizationProps<T> extends Msdyn365.IModule<T> {
    resources: IProductCustomizationResources;
    config: IProductCustomizationConfig;
}
