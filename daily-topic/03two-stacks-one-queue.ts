/**
 * @description 两个栈 实现一个 队列的 API add delete length
 * @author Terry
 */

export class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];
  /**
   * 入队
   * @param n
   */
  add(n: number) {
    this.stack1.push(n);
  }

  /**
   * 出队
   */
  delete(): number | null {
    let res;
    const stack1 = this.stack1;
    const stack2 = this.stack2;

    // 1. 将 stack1 所有元素移动到 stack2 中
    while (stack1.length) {
      const n = stack1.pop();
      if (n !== null) {
        stack2.push(n);
      }
    }

    // 2. stack2 pop
    res = stack2.pop();

    // 3. 将 stack2 所有元素再 “还给” stack1
    while (stack2.length) {
      const n = stack2.pop();
      if (n !== null) {
        stack1.push(n);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}

// 性能分析
// 时间复杂度：add O(1) delete O(n)
// 空间复杂度，整体是O(n)
