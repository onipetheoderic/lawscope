require 'rufus-scheduler'

scheduler = Rufus::Scheduler::singleton

scheduler.every '59m' do
  Subscription.check_updated_at
end