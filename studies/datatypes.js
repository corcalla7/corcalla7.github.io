/* Data is stored in types, both simple and complex.
   These datatypes allow for certain behaviors in JavaScript code.
   The types of data are as follows:
    • Simple:
        - Number
        - Boolean
        - String
        - undefined
        - null
        - NaN (Not a Number)
    • Complex
        - Array
        - Object
        - Function
        - Date
   
   
   - A number shows a numeric value, which can be changed through
     arithmetic/assignment operators, such a +(=), -(=), *(=), and
     /(=).
   - A Boolean is a simple true or false, primarily used in
     conditional statements and loop code.
   - Strings are datatypes that represent words in a standard
     language. They are wrapped in quotes, single or double ("",
     ''), or grave accents (``).
   - undefined is a datatype for when there is no value designated
     to a variable.
   - null is a placeholder value for when there is nothing where
     there once was something (ex., removing an array from a variable
     and not replacing it with something else).
   - NaN only takes effect when the data value is not a real number,
     or not a number at all when there should be one.
   - Arrays are complex values that store other values in an
     ordered list, indexed in 0-base, meaning 0 is the start of the
     count. They can store whatever datatype they need, including
     other arrays.
   - Objects are similar to arrays, with the exception of the ordering
     and indexing. Instead of indexing, they keep their data in key/value
     pairs. The key is a representative string, and the value can be
     anything that's required, including other objects.
   - Functions are a datatype that act as repeatable actions.
     Instead of rewriting the code every time you need it, you can
     just call on a function. They can still be stored in arrays and
     objects, however.
   - Dates store the date and time relative to the device your
     environment is being worked on. They are typically useful for
     storing the date and time to use in clocks and calendars.
     */