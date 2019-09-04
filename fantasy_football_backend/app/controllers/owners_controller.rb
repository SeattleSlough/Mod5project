class OwnersController < ApplicationController
def index
    @owners = Owner.all 
    render json: @owners
end


def create
    @owner.save(user_id: params[id], player_id: params[:player_id])
end

def destroy
    @owner = Owner.findby(:id)
    Owner.destroy(@owner)
end
end
