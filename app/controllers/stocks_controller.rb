class StocksController < ApplicationController
  respond_to :json

  def index
    respond_with stock.all? 
  end

end