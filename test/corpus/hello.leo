============================
Basic Program
============================

// The 'leo-test' program.
program leo-test.aleo {
    transition main(public a: u32, b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }
}

---

(source_file [0, 0] - [7, 0]
  (comment [0, 0] - [0, 26])
  (program_name [1, 8] - [1, 21])
  (program_member [2, 4] - [5, 5]
    (transition [2, 4] - [5, 5]
      (identifier [2, 15] - [2, 19])
      (parameter_list [2, 20] - [2, 41]
        (parameter [2, 20] - [2, 33]
          (identifier [2, 27] - [2, 28])
          (typename [2, 30] - [2, 33]
            (identifier [2, 30] - [2, 33])))
        (parameter [2, 35] - [2, 41]
          (identifier [2, 35] - [2, 36])
          (typename [2, 38] - [2, 41]
            (identifier [2, 38] - [2, 41]))))
      (identifier [2, 46] - [2, 49])
      (block [2, 50] - [5, 5]
        (statement [3, 8] - [3, 27]
          (variable_declaration [3, 8] - [3, 26]
            (identifier [3, 12] - [3, 13])
            (identifier [3, 15] - [3, 18])
            (expression [3, 21] - [3, 26]
              (binary_expression [3, 21] - [3, 26]
                (expression [3, 21] - [3, 22]
                  (identifier [3, 21] - [3, 22]))
                (expression [3, 25] - [3, 26]
                  (identifier [3, 25] - [3, 26]))))))
        (statement [4, 8] - [4, 17]
          (return [4, 8] - [4, 16]
            (expression [4, 15] - [4, 16]
              (identifier [4, 15] - [4, 16]))))))))
