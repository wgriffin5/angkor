# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Stock.create!(symbol: 'DEPO', name: 'Depomed')
Stock.create!(symbol: 'MNDO', name: 'Mind CTi')
Stock.create!(symbol: 'PPC', name: 'Pilgrims Pride')
Stock.create!(symbol: 'ONE', name: 'Higher One')
Stock.create!(symbol: 'BRCD', name: 'Brocade')
