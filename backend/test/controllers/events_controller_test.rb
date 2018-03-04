require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
  end

  test "should get index" do
    get events_url, as: :json
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count') do
      post events_url, params: { event: { anser_limit: @event.anser_limit, detail: @event.detail, place: @event.place, title: @event.title, top_limit: @event.top_limit, under_limit: @event.under_limit, user_id: @event.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show event" do
    get event_url(@event), as: :json
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { anser_limit: @event.anser_limit, detail: @event.detail, place: @event.place, title: @event.title, top_limit: @event.top_limit, under_limit: @event.under_limit, user_id: @event.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete event_url(@event), as: :json
    end

    assert_response 204
  end
end
