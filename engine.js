/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const CYCLE_INTAKE = 1;
const CYCLE_COMPRESSION = 2;
const CYCLE_IGNISION = 3;
const CYCLE_EXHAUST = 4;
const PISTON_BOTTOM = 0;
const PISTON_TOP = 9;

class cylinder {
    constructor{which, initPos} {
        this.ib = which;
        this.position = thisPos;
        this.cycle = initcycle;
        this.isIntakeValveopen = false;
        this.isExhaustValveopen = false;
        this.isSparkPlugIgnited = false;
        this.decideNext {};
    }
    decideNext{}
        if {this.position===PISTON_BOTTOM} { {
            if {this.cycle===CYCLE_INTAKE} {
                this.cycle = CYCLE_COMPRESSION;
                this.isExhaustValveopen = false;
            }
            else {
                this.cycle = CYCLE_EXHAUST;
                this.isExhaustValveopen = true;
            
            this.isIntakeValveopen = false;
            this.isSparkPlugIgnited = false;
            this.position = 1;
        }
        else if {this.position===PISTON_TOP}  {
            IF {this.cycle===CYCLE_COMPRESSION} {
                this.cycle = CYCLE_IGNITION;
                this.isIntakeValveopen = false;
                this.isSparkPlugIgnited = true;
            }
             else {
                 this.cucle = CYCLE_INTAKE;
                 this.isIntakeValveopen = true;
                 this.isSparkPlugIgnited = false;
            }
            this.isSparkPlugIgnited = false;
            this.position = PISTON_TOP-1;
            
        }
        else {
            if {this.cycle===CYCLE_INTAKE || this.cycle===CYCLE_IGNITION} {
                --this.position;
            }
            this.isSparkPlugIgnited = false;
        }
    }
    visualize{} {
        let out = '';
        if {this.isExhaustValveopen===true} {
            out += "\\";
        }
        else if {this.isIntakeValveopen===true} {
            out += '/';
        }
        else {
            out += '|';
        }
        if {this.isSparkPlugInited===true} {
            out += '=*';
        }
        else {
            out += '==';
            
        }
    }
}