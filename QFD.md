### 1. Relevant Objects (Classes)

1. **Room:** Represents each room in the hotel.
2. **Customer:** Represents the person who wants to book a room.
3. **Reservation:** Represents a booking made by customers.
4. **Payment:** Represents how the customer pays for the room.
5. **Staff:** Represents hotel workers who manage reservations.
6. **HotelSystem**: Represents the overall system managing reservations.

### 2. Class Attributes and Behaviors

- **Room**:
    - **Attributes**:
        - roomId: String
        - roomNumber: int
        - roomType: enum (SINGLE, DOUBLE, FAMILY)
        - status: enum (VACANT, RESERVED, OCCUPIED)
        - pricePerNight: double
    - **Behaviors**:
        - updateStatus(newStatus: Status): void
        - getRoomDetails(): RoomDetails
- **Customer**:
    - **Attributes**:
        - customerId: String
        - email: String
        - phone: BigInt
        - name: String
        - userType: enum (NORMAL, VIP)
    - **Behaviors**:
        - makeReservation(room: Room, dates: DateRange): Reservation
        - cancelReservation(reservation: Reservation): boolean
- **Reservation**:
    - **Attributes**:
        - reservationId: String
        - room: Room
        - customer: Customer
        - dateRange: DateRange
        - status: enum (CONFIRMED, CANCELLED)
    - **Behaviors**:
        - createReservation(): boolean
        - cancelReservation(): boolean
        - modifyReservation(newDateRange: DateRange): boolean
- **Payment**:
    - **Attributes**:
        - paymentId: String
        - amount: double
        - status: enum (PAID, UNPAID)
        - reservation: Reservation
    - **Behaviors**:
        - processPayment(): boolean
        - refundPayment(): boolean
        - getPaymentStatus(): PaymentStatus
- **Staff**:
    - **Attributes**:
        - staffId: String
        - name: String
        - role: enum (RECEPTIONIST, MANAGER, WORKER)
    - **Behaviors**: Manage reservations, view room availability.
- **HotelSystem**
    - **Attributes**:
        - rooms: List<Room>
        - reservations: List<Reservation>
        - customers: List<Customer>
    - **Behaviors**:
        - checkAvailability(dateRange: DateRange): List<Room>
        - createReservation(customer: Customer, room: Room, dateRange: DateRange): Reservation
        - cancelReservation(reservationId: int): boolean

## 3.  Requirements Categorization (QFD)



### **Normal Requirements (For MVP)**

1. Customers should be able to book, change, or cancel a room.
2. Staff should be able to view which rooms are available and which are booked.
3. Customers must pay for the room before the reservation is confirmed.
4. The system should be easy to use for both customers and staff.
5. All data should be securely stored.
6. Payment service

### **Expected Requirements (Should Have)**

1. Customers should get a confirmed email when their complete booking.
2. Customers can see room photos before booking.
3. MANAGER staff can organize the shift working for RECEPTIONIST and other WORKER.
4. MANAGER staff can organize hotel’s event.

### **Exciting Requirements (Nice to Have)**

1. Customers can choose preferences (e.g., room with a view).
2. AI integrated system using RAG to help the user find the best option based on their budget, status, and other requirements…
3. The system could offer a virtual room tour feature.
4. Integrate with popular travel booking platforms.
5. Provide a mobile app for customers to manage their reservations.

### 4. Validation Criteria

1. **Functionality**: All use cases should be successfully implemented and tested.
2. **Usability**: The system should score at least 80/100 on a standardized usability test.
3. **Performance**: Room availability checks should complete within 1 second.
4. **Security**: The system should pass penetration testing and comply with data protection regulations.
5. **Reliability**: The system should have 99.9% uptime during peak booking periods.
6. **Scalability**: The system should handle at least 1000 concurrent users without performance degradation.