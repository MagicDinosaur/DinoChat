from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.post("/posting_test", json={"content": "111"})
    @task(2)
    def send_room_booking(self):
        self.client.post("/booking_room", json={"row": "2", "col": "3","student_id": "1234567890"})