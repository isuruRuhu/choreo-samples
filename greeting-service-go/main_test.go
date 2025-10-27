/*
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com/) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGreet(t *testing.T) {
	tests := []struct {
		name           string
		queryParam     string
		expectedBody   string
		expectedStatus int
	}{
		{
			name:           "greet with name parameter",
			queryParam:     "name=John",
			expectedBody:   "Hello, John!\n",
			expectedStatus: http.StatusOK,
		},
		{
			name:           "greet without name parameter",
			queryParam:     "",
			expectedBody:   "Hello, Stranger!\n",
			expectedStatus: http.StatusOK,
		},
		{
			name:           "greet with empty name parameter",
			queryParam:     "name=",
			expectedBody:   "Hello, Stranger!\n",
			expectedStatus: http.StatusOK,
		},
		{
			name:           "greet with special characters in name",
			queryParam:     "name=José",
			expectedBody:   "Hello, José!\n",
			expectedStatus: http.StatusOK,
		},
		{
			name:           "greet with spaces in name",
			queryParam:     "name=John Doe",
			expectedBody:   "Hello, John Doe!\n",
			expectedStatus: http.StatusOK,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req, err := http.NewRequest("GET", "/greeter/greet?"+tt.queryParam, nil)
			if err != nil {
				t.Fatal(err)
			}

			rr := httptest.NewRecorder()

			greet(rr, req)

			if status := rr.Code; status != tt.expectedStatus {
				t.Errorf("handler returned wrong status code: got %v want %v",
					status, tt.expectedStatus)
			}

			if body := rr.Body.String(); body != tt.expectedBody {
				t.Errorf("handler returned unexpected body: got %v want %v",
					body, tt.expectedBody)
			}
		})
	}
}

func TestGreetHTTPMethods(t *testing.T) {
	methods := []string{"POST", "PUT", "DELETE", "PATCH"}

	for _, method := range methods {
		t.Run("greet with "+method+" method", func(t *testing.T) {
			req, err := http.NewRequest(method, "/greeter/greet?name=John", nil)
			if err != nil {
				t.Fatal(err)
			}

			rr := httptest.NewRecorder()
			greet(rr, req)

			if status := rr.Code; status != http.StatusOK {
				t.Errorf("handler returned wrong status code for %s: got %v want %v",
					method, status, http.StatusOK)
			}

			expectedBody := "Hello, John!\n"
			if body := rr.Body.String(); body != expectedBody {
				t.Errorf("handler returned unexpected body for %s: got %v want %v",
					method, body, expectedBody)
			}
		})
	}
}
