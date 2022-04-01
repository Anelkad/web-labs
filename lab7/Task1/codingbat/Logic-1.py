def cigar_party(cigars, is_weekend):
  return cigars >= 40 and (is_weekend or cigars <= 60)

def date_fashion(you, date):
  return 0 if you < 3 or date < 3 else 2 if you > 7 or date > 7 else 1

def squirrel_play(temp, is_summer):
  return 60 <= temp <= (90 + is_summer * 10)

def caught_speeding(speed, is_birthday):
  return 0 if speed <= 60 + 5*is_birthday else 1 if speed <= 80 + 5*is_birthday else 2

def sorta_sum(a, b):
  return 20 if 10 <= a + b <= 19 else a + b

def alarm_clock(day, vacation):
  return '7:00' if 0 < day < 6 and not vacation else 'off' if day in (0, 6) and vacation else '10:00'

def love6(a, b):
  return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

def in1to10(n, outside_mode):
  return n in (1, 10) or ((1 < n < 10) != outside_mode)

def near_ten(num):
  return 8 <= num % 10 or num % 10 <= 2