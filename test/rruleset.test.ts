import { parse, datetime, testRecurring } from './lib/utils'
import { RRule, RRuleSet } from '../src'

describe('RRuleSet', function () {
  // Enable additional toString() / fromString() tests
  // for each testRecurring().
  // this.ctx.ALSO_TEST_STRING_FUNCTIONS = false

  // Thorough after()/before()/between() tests.
  // NOTE: can take a longer time.
  this.ctx.ALSO_TEST_BEFORE_AFTER_BETWEEN = true

  testRecurring('testSet',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 2,
        byweekday: RRule.TU,
        dtstart: parse('19970902T090000')
      }))
      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 1,
        byweekday: RRule.TH,
        dtstart: parse('19970902T090000')
      }))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 4, 9, 0),
      datetime(1997, 9, 9, 9, 0)
    ]
  )

  testRecurring('testSetDate',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 1,
        byweekday: RRule.TU,
        dtstart: parse('19970902T090000')
      }))
      set.rdate(datetime(1997, 9, 4, 9))
      set.rdate(datetime(1997, 9, 9, 9))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 4, 9, 0),
      datetime(1997, 9, 9, 9, 0)
    ]
  )

  testRecurring('testSetExRule',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 6,
        byweekday: [RRule.TU, RRule.TH],
        dtstart: parse('19970902T090000')
      }))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 3,
        byweekday: RRule.TH,
        dtstart: parse('19970902T090000')
      }))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 9, 9, 0),
      datetime(1997, 9, 16, 9, 0)
    ]
  )

  testRecurring('testSetExDate',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 6,
        byweekday: [RRule.TU, RRule.TH],
        dtstart: parse('19970902T090000')
      }))
      set.exdate(datetime(1997, 9, 4, 9))
      set.exdate(datetime(1997, 9, 11, 9))
      set.exdate(datetime(1997, 9, 18, 9))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 9, 9, 0),
      datetime(1997, 9, 16, 9, 0)
    ]
  )

  testRecurring('testSetExDateRevOrder',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.MONTHLY,
        count: 5,
        bymonthday: 10,
        dtstart: parse('20040101T090000')
      }))
      set.exdate(datetime(2004, 4, 10, 9, 0))
      set.exdate(datetime(2004, 2, 10, 9, 0))
      return set
    },
    [
      datetime(2004, 1, 10, 9, 0),
      datetime(2004, 3, 10, 9, 0),
      datetime(2004, 5, 10, 9, 0)
    ]
  )

  testRecurring('testSetDateAndExDate',
    function () {
      const set = new RRuleSet()

      set.rdate(datetime(1997, 9, 2, 9))
      set.rdate(datetime(1997, 9, 4, 9))
      set.rdate(datetime(1997, 9, 9, 9))
      set.rdate(datetime(1997, 9, 11, 9))
      set.rdate(datetime(1997, 9, 16, 9))
      set.rdate(datetime(1997, 9, 18, 9))
      set.exdate(datetime(1997, 9, 4, 9))
      set.exdate(datetime(1997, 9, 11, 9))
      set.exdate(datetime(1997, 9, 18, 9))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 9, 9, 0),
      datetime(1997, 9, 16, 9, 0)
    ]
  )

  testRecurring('testSetDateAndExRule',
    function () {
      const set = new RRuleSet()

      set.rdate(datetime(1997, 9, 2, 9))
      set.rdate(datetime(1997, 9, 4, 9))
      set.rdate(datetime(1997, 9, 9, 9))
      set.rdate(datetime(1997, 9, 11, 9))
      set.rdate(datetime(1997, 9, 16, 9))
      set.rdate(datetime(1997, 9, 18, 9))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 3,
        byweekday: RRule.TH,
        dtstart: parse('19970902T090000')
      }))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 9, 9, 0),
      datetime(1997, 9, 16, 9, 0)
    ]
  )

  testRecurring('testSetCachePre',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 2,
        byweekday: RRule.TU,
        dtstart: parse('19970902T090000')
      }))
      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 1,
        byweekday: RRule.TH,
        dtstart: parse('19970902T090000')
      }))
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 4, 9, 0),
      datetime(1997, 9, 9, 9, 0)
    ]
  )

  testRecurring('testSetCachePost',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 2,
        byweekday: RRule.TU,
        dtstart: parse('19970902T090000')
      }))
      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 1,
        byweekday: RRule.TH,
        dtstart: parse('19970902T090000')
      }))
      set.all()
      return set
    },
    [
      datetime(1997, 9, 2, 9, 0),
      datetime(1997, 9, 4, 9, 0),
      datetime(1997, 9, 9, 9, 0)
    ]
  )

  testRecurring('testSetInfiniteAll',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        dtstart: parse('19970902T090000')
      }))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 10,
        dtstart: parse('19970902T090000')
      }))

      return {
        rrule: set,
        method: 'all',
        args: [
          function (_: any, count: number) {
            return count < 3
          }
        ]
      }
    },
    [
      datetime(2007, 9, 2, 9, 0),
      datetime(2008, 9, 2, 9, 0),
      datetime(2009, 9, 2, 9, 0)
    ]
  )

  testRecurring('testSetInfiniteBetween',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        dtstart: parse('19970902T090000')
      }))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 10,
        dtstart: parse('19970902T090000')
      }))
      return {
        rrule: set,
        method: 'between',
        args: [
          datetime(2000, 9, 2, 9, 0),
          datetime(2010, 9, 2, 9, 0)
        ]
      }
    },
    [
      datetime(2007, 9, 2, 9, 0),
      datetime(2008, 9, 2, 9, 0),
      datetime(2009, 9, 2, 9, 0)
    ]
  )

  testRecurring('testSetInfiniteBefore',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        dtstart: parse('19970902T090000')
      }))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 10,
        dtstart: parse('19970902T090000')
      }))
      return {
        rrule: set,
        method: 'before',
        args: [
          datetime(2015, 9, 2, 9, 0),
          false
        ]
      }
    },
    [
      datetime(2014, 9, 2, 9, 0)
    ]
  )

  testRecurring('testSetInfiniteAfter',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        dtstart: parse('19970902T090000')
      }))
      set.exrule(new RRule({
        freq: RRule.YEARLY,
        count: 10,
        dtstart: parse('19970902T090000')
      }))
      return {
        rrule: set,
        method: 'after',
        args: [
          datetime(2000, 9, 2, 9, 0),
          false
        ]
      }
    },
    [
      datetime(2007, 9, 2, 9, 0)
    ]
  )

  testRecurring('testBefore70',
    function () {
      const set = new RRuleSet()

      set.rrule(new RRule({
        freq: RRule.YEARLY,
        count: 2,
        dtstart: parse('19600101T090000')
      }))
      return {
        rrule: set,
        method: 'all'
      }
    },
    [
      datetime(1960, 1, 1, 9, 0),
      datetime(1961, 1, 1, 9, 0)
    ]
  )
})
