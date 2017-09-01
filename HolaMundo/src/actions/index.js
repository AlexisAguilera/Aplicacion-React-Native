export const selectHotel = (hotelId) => {
    return {
        type: 'select_hotel',
        payload: hotelId
    };
};
