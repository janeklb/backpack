/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { primaryThemeAttributes, secondaryThemeAttributes } from './../packages/bpk-component-button';

/* eslint-disable global-require */
export default {
  'bpk-component-accordion': require('./../packages/bpk-component-accordion').themeAttributes,
  'bpk-component-barchart': require('./../packages/bpk-component-barchart').themeAttributes,
  'bpk-component-blockquote': require('./../packages/bpk-component-blockquote').themeAttributes,
  'bpk-component-button': [...primaryThemeAttributes, ...secondaryThemeAttributes],
  'bpk-component-link': require('./../packages/bpk-component-link').themeAttributes,
  'bpk-component-horizontal-nav': require('./../packages/bpk-component-horizontal-nav').themeAttributes,
  'bpk-component-spinner': require('./../packages/bpk-component-spinner').themeAttributes,
};
