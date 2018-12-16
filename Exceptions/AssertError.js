"use strict;"
/*!
 *  Bayrell Common Library
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof BayrellCommon == 'undefined') BayrellCommon = {};
if (typeof BayrellCommon.Exceptions == 'undefined') BayrellCommon.Exceptions = {};
BayrellCommon.Exceptions.AssertError = class extends Runtime.Exceptions.RuntimeException{
	constructor(message, context, prev){
		if (prev == undefined) prev=null;
		if (message == ""){
			message = Runtime.Utils.translate("ERROR_ASSERT", null, "", context);
		}
		super(message, Runtime.RuntimeConstant.ERROR_ASSERT, context, prev);
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "BayrellCommon.Exceptions.AssertError";}
	static getParentClassName(){return "Runtime.Exceptions.RuntimeException";}
}