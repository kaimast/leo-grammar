
module.exports = grammar({
  name: 'leo',

  extras: $ => [/\s/, /\t/, $.comment],

  rules: {
    source_file: $ => seq(
      'program', $.program_name, '{',
        $.program_member,
      '}'
    ),

    program_name: $ => /[a-zA-Z_][a-zA-Z0-9_]*\.aleo/,

    // Statements
    program_member: $ =>
      choice(
        $.transition,
      ),

    // Variable declaration: let x = 42
    variable_declaration: $ => seq(
      'let', field('name', $.identifier), ':', field('type', $.identifier), '=', field('rval', $.expression)
    ),

    // Transiton declartion: transition add(x, y) { return x + y }
    transition: $ => seq(
      'transition', field('name', $.identifier), '(', field('parameters', $.parameter_list), ')',
       optional(seq('->', field('return_type', $.identifier))),
       $.block
    ),

    return: $ => seq('return', field('rval', $.expression)),

    // Expression statement: x = 42 or call(foo, bar)
    statement: $ => seq(choice(
      $.variable_declaration, $.function_call, $.return
    ), ';'),

    // Expressions
    expression: $ => choice(
      $.literal, $.identifier, $.binary_expression, $.function_call
    ),

    // Literal values like numbers, strings, etc.
    literal: $ => choice($.number, $.string),

    // Identifier: a simple variable or function name
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    // Numbers (integer or floating-point)
    number: $ => /\d+(\.\d+)?/,

    // Strings (single or double quoted)
    string: $ => /"[^"]*"/,

    // Binary expression: x + y, a * b, etc.
    binary_expression: $ => prec.left(seq($.expression, choice('+', '-', '*', '/', '%'), $.expression)),

    // Function call: foo(bar, baz)
    function_call: $ => seq($.identifier, '(', optional($.argument_list), ')'),

    // Function arguments
    argument_list: $ => seq($.argument, repeat(seq(',', $.argument))),

    argument: $ => $.identifier,

    // Parameters in a function declaration
    parameter_list: $ => seq($.parameter, repeat(seq(',', $.parameter))),

    parameter: $ => seq(optional('public'), field('name', $.identifier), ':', field('type', $.identifier)),

    // Block of code enclosed by braces
    block: $ => seq('{', repeat($.statement), '}'),

    comment: $ => seq('//', /.*/),
  }
})
