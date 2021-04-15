//This class will hold all the Chip8 instructions and peripherals (keyboard, display, etc.)
import { Display } from './Display';

export class Chip8 {
    constructor() {
        
        console.log('Create a new Chip-8');
        this.display = new Display();
    }
}