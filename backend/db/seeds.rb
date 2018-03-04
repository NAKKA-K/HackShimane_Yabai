# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    name: 'まつもと ゆきひろ',
    email: 'shimane@matz.com',
    password_digest: 'matz',
)
User.create(
    name: '島根 ルビー',
    email: 'shimane@ruby.com',
    password_digest: 'ruby',
)
User.create(
    name: '島根 しじみ',
    email: 'shimane@shijimi.com',
    password_digest: 'shijimi',
)
User.create(
    name: '島根 しまねっ子',
    email: 'shimane@shimane.com',
    password_digest: 'shimane',
)

Event.create(
    user_id: 1,
    title: 'Hack Shimane 第1回',
    top_limit: 20,
    under_limit: 3,
    place: '松江市朝日町478番地18松江テルサ別館2階',
    date: '2018-08-10',
    detail: '島根でハッカソンをやろう',   
    anser_limit: '2018-08-10',
)

Answer.create(
    expression: 'join',
    user_id: 2,
    event_id: 1,
)
Answer.create(
    expression: 'worry',
    user_id: 3,
    event_id: 1,
)
Answer.create(
    expression: 'hold',
    user_id: 4,
    event_id: 1,
)

