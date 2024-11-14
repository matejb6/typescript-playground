import { Calc } from './shared/calc.ts';

class Main {
  /**
   * Main run method, entry point for execution
   */
  public static run(): void {
    console.log('Hello World');

    const a = 2;
    const b = 3;
    const result = Calc.add(2, 3);
    console.log(`Adding ${a} and ${b} results in ${result}`);
  }
}

Main.run();
