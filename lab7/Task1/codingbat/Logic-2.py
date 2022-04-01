def make_bricks(small, big, goal):
  goal -= min(goal // 5, big) * 5
  return goal <= 

def lone_sum(a, b, c):
  l = (a, b, c)
  return sum(x * (l.count(x) == 1) for x in l)

def lucky_sum(a, b, c):
  l = (a, b, c)
  return sum(l) if 13 not in l else sum(l[:l.index(13)])

def no_teen_sum(a, b, c):
  return sum(map(lambda x: 0 if x in (13, 14, 17, 18, 19) else x, (a, b, c)))

def round_sum(a, b, c):
  return sum(map(lambda x: x + 10 - x % 10 if x % 10 >= 5 else x - x % 10, (a, b, c)))

def close_far(a, b, c):
  close = lambda x, y: abs(y - x) <= 1
  return close(b, a) and not (close(c, a) or close (c, b)) or close(c, a) and not (close(b, a) or close (c, b))

def make_chocolate(small, big, goal):
  goal -= min(goal // 5, big) * 5
  return goal if goal <= small else -1