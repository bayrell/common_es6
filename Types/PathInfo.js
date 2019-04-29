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
if (typeof BayrellCommon.Types == 'undefined') BayrellCommon.Types = {};
BayrellCommon.Types.PathInfo = class{
	/**
	 * Returns string
	 */
	toString(){
		return this.filepath;
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "BayrellCommon.Types.PathInfo";}
	static getCurrentClassName(){return "BayrellCommon.Types.PathInfo";}
	static getParentClassName(){return "";}
	_init(){
		this.filepath = "";
		this.dirname = "";
		this.basename = "";
		this.extension = "";
		this.filename = "";
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(Runtime.Interfaces.StringInterface);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
	}
	static getFieldInfoByName(field_name){
		return null;
	}
	static getMethodsList(names){
	}
	static getMethodInfoByName(method_name){
		return null;
	}
}
BayrellCommon.Types.PathInfo.__static_implements__ = [];
BayrellCommon.Types.PathInfo.__static_implements__.push(Runtime.Interfaces.StringInterface)